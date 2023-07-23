using System;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.Networking;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Polaris.Core
{
    public class PositionCamera : MonoBehaviour
    {
        public Transform cameraTransform;
        private double longitude;
        private double latitude;
        private float degNorth;
        private string lst;
        private Matrix4x4 ltpMatrix;

        // Start is called before the first frame update
        // Permissions require to be called at Start() without any delay.
        // Trying to abstract into methods does not work.
        IEnumerator Start()
        {
            if (!Input.location.isEnabledByUser)
            {
                Debug.Log("No Permission");
                yield break;
            }
                Debug.Log("Permission Granted");
                // public void Start(float desiredAccuracyInMetres, float updateDistanceInMeters);
                UnityEngine.Input.location.Start(500f, 500f);
                Input.compass.enabled = true;
                
                int maxWait = 5;
                while (Input.location.status == LocationServiceStatus.Initializing && maxWait > 0)
                {
                    yield return new WaitForSeconds(1);
                    maxWait--;
                }

                Debug.Log("Waiting before getting lat and lon");
                
                // Access granted and location value could be retrieved
                this.longitude = Input.location.lastData.longitude;
                this.latitude = Input.location.lastData.latitude;

                // Astronomical Applications API call
                // StartCoroutine(GetSiderealTime());

                // while (this.lst == null)
                // {
                //     yield return new WaitForSeconds(0.2f);
                // }

                // Compass data
                this.degNorth = Input.compass.magneticHeading;
                
                // Stop retrieving location
                Input.location.Stop();

                AlignCamera();
        }

        private IEnumerator GetSiderealTime()
        {
            // Template for Astronomical Applications Department API Call
            // https://aa.usno.navy.mil/api/siderealtime?date=DATE &time=TIME&coords=COORDS &reps=REPS&intv_mag=INTV_MAG &intv_unit=INTV_UNIT

            // Setting query parameters
            DateTime today = DateTime.Now;
            string tdyString = today.ToString("yyyy-MM-dd");
            string nowString = today.ToString("HH:mm:ss");

            // Sends HTTP request
            string url = "https://aa.usno.navy.mil/api/siderealtime";
            string queryParams = $"?date={tdyString}&coords={this.latitude},{this.longitude}&reps=1&intv_mag=10&intv_unit=minutes&time={nowString}";
            UnityWebRequest request = UnityWebRequest.Get(url + queryParams);
            yield return request.SendWebRequest();

            string responseData = request.downloadHandler.text;

            // Deserialize the JSON response using Newtonsoft.Json
            LSTRootData response = JsonConvert.DeserializeObject<LSTRootData>(responseData);
            // Access the LST value from the first data entry based on the key "last"
            // Last -> Local Apparent Sidereal Time
            Debug.Log("Local Sidereal Time (LST): " + response.properties.data[0].last);

            this.lst = response.properties.data[0].last;
        }

        private void AlignCamera()
        {
            // this.ltpMatrix = CalculateLTPMatrix();

            // Apply rotation to cameraA
            // cameraTransform.rotation = Quaternion.LookRotation(this.ltpMatrix.GetColumn(2), this.ltpMatrix.GetColumn(1));

            // Apply the rotation to the camera
            cameraTransform.rotation = Quaternion.Euler(0f, degNorth, 0f) * cameraTransform.rotation;
        }

        private Matrix4x4 CalculateLTPMatrix()
        {
            // Split into hh, mm, ss
            string[] timesStrings = this.lst.Split(":");
            float[] times = new float[3];
            for (int i = 0; i < 3; i++)
            {
                times[i] = Single.Parse(timesStrings[i]);
            }
            float time = ConvertTimeToRad(times[0], times[1], times[2]);

            Quaternion eastRotation = Quaternion.Euler(0f, -time * Mathf.Rad2Deg, 0f);

            // Origin (0, 0, 0) is where user is located
            return Matrix4x4.TRS(Vector3.zero, eastRotation, Vector3.one);
        }

        private float ConvertTimeToRad(float hh, float mm, float ss)
        {
            float deg = (hh + mm / 60f + ss / 3600f) * 15f;
            return deg * Mathf.Deg2Rad;
        }

        public class Data
        {
            public int day;
            public double eqofeq;
            public string gast;
            public string gmst;
            public string last;
            public string lmst;
            public int month;
            public string ut1time;
            public int year;
        }

        public class LSTRootData
        {
            public string apiversion;
            public Geometry geo;
            public Properties properties;
            public string aatype;
        }

        public class Properties
        {
            public Data[] data;
            public string truncated;
        }

        public class Geometry
        {
            public float[] coordinates;
            public string height;
            public string type;
        }
    }
}