using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PositionCamera : MonoBehaviour
{
    public Transform cameraTransform;
    private double longitude;
    private double latitude;
    private float degNorth;
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
            longitude = Input.location.lastData.longitude;
            latitude = Input.location.lastData.latitude;

            // Compass data
            degNorth = Input.compass.magneticHeading;
            
            // AddLocation(latitude, longitude);
            Debug.Log("" + Input.location.status + "  lat:" + latitude + "  long:" + longitude);
            
            // Stop retrieving location
            Input.location.Stop();

            // Apply the rotation to the camera
            cameraTransform.rotation = Quaternion.Euler(0, degNorth, 0f);
    }

 }

// using UnityEngine;

// public class PositionCamera : MonoBehaviour
// {
//     private Gyroscope gyroscope;
//     public Transform cameraTransform;

//     private void Start()
//     {
//         // Check if gyroscope is available
//         if (SystemInfo.supportsGyroscope)
//         {
//             // Enable gyroscope
//             gyroscope = Input.gyro;
//             gyroscope.enabled = true;
//             Quaternion q = Input.gyro.attitude;

//             cameraTransform.rotation = new Quaternion(q.x, q.y, -q.z, -q.w);
//         }
//         else
//         {
//             Debug.Log("Gyroscope is not supported on this device.");
//         }
//     }

//     // private void Update()
//     // {
//     //     // Rotate game object based on gyroscope input
//     //     if (gyroscope != null)
//     //     {
//     //         // Get the gyroscope rotation rate
//     //         Quaternion q = Input.gyro.attitude;

//     //         cameraTransform.rotation = new Quaternion(q.x, q.y, -q.z, -q.w);
//     //     }
//     // }
// }
