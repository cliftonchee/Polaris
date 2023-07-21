using UnityEngine;
using UnityEngine.Networking;
using System.Collections;
using System.IO;
using System;

namespace Polaris.SolarSystem
{
    public class HorizonAPIRequest : MonoBehaviour
    {
        public GameObject[] planets;
        [SerializeField] public float MinsBetwUpdates = 10f;

        void Start()
        {
            float seconds = MinsBetwUpdates * 60f;
            InvokeRepeating("sendHttpRequest", 0f, seconds);
        }

        private void sendHttpRequest() 
        {
            StartCoroutine(sendRequestCoroutine());
        }

        private IEnumerator sendRequestCoroutine()
        {
            // Example query: 
            // https://ssd.jpl.nasa.gov/api/horizons.api?format=text&COMMAND='499'&OBJ_DATA='YES'&MAKE_EPHEM='YES'&EPHEM_TYPE='OBSERVER'&CENTER='500@399'&START_TIME='2006-01-01'&STOP_TIME='2006-01-20'&STEP_SIZE='1%20d'&QUANTITIES='1,9,20,23,24,29'
            string url = "https://ssd.jpl.nasa.gov/api/horizons.api";

            // Setting query parameters
            DateTime today = DateTime.Now;
            string nowString = today.ToString("yyyy-MMM-d HH:mm");
            string ltrString = today.AddMinutes(10).ToString("yyyy-MM-d HH:mm");

            // Array of planets [Sun, Mercury, Venus, Earth, Moon, Mars, Jupiter, Saturn, Uranus, Neptune]
            string[] planetNames = new string[] { 
                                "Sun", "Mercury", "Venus", "Earth", 
                                "Moon", "Mars", "Jupiter", "Saturn", 
                                "Uranus", "Neptune", "Pluto"
                                };
            int[] planetCodes = new int[] {10, 199, 299, 399, 301, 499, 599, 699, 799, 899, 999};
            PlanetData[] planetsData = new PlanetData[11];

            // Sends a HTTP request for each planet
            for (int i = 0; i < 11; i++) {
                planetsData[i] = new PlanetData(planetNames[i], planetCodes[i]);

                // Sends HTTP request
                string queryParams = $"?format=json&COMMAND='{planetCodes[i]}'&EPHEM_TYPE='VECTORS'&CENTER='500@0'&START_TIME='{nowString}'&STOP_TIME='{ltrString}'&STEP_SIZE='10 min'&CSV_FORMAT='YES'";
                UnityWebRequest request = UnityWebRequest.Get(url + queryParams);

                yield return request.SendWebRequest();

                if (request.result == UnityWebRequest.Result.Success)
                {
                    string responseData = request.downloadHandler.text;
                    Debug.Log(responseData);

                    processData(responseData, planetsData[i]);
                    
                    // Set coordinates of planets
                    Transform planetPos = planets[i].transform;
                    planetPos.position =  planetsData[i].adjustedScaleDown();

                    // Realign to Unity's coordinate system from IAU convention
                    planetPos.position = new Vector3(-planetPos.position.z, planetPos.position.y, planetPos.position.x);
                }
                else
                {
                    Debug.Log("Error making Horizons API request: " + request.error + " for " + planetCodes[i]);
                }
            }
            
            yield return new WaitForSeconds(MinsBetwUpdates * 60f);
        }

        private void processData(string data, PlanetData currPlanetData) {
            
            // Finds the start and end indices of the coordinate data
            int startIndex = data.IndexOf("$$SOE") + "$$SOE".Length;
            int endIndex = data.IndexOf("$$EOE");

            // Extracts the coordinate data substring
            string coordinatesData = data.Substring(startIndex, endIndex - startIndex);

            // Splits the coordinate data into individual lines
            string[] lines = coordinatesData.Split(',');

            // Process Data
            currPlanetData.setCoordinates(Single.Parse(lines[2]), Single.Parse(lines[3]), Single.Parse(lines[4]));
        }
    }
}