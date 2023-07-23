using System;
using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.Networking;
using UnityEngine.TestTools;
using Polaris.SolarSystem;

namespace Tests.PlayMode
{
    public class PlanetsPositionTest
    {
        [UnitySetUp]
        public IEnumerator Setup()
        {
            UnityEngine.SceneManagement.SceneManager.LoadScene("polaris-ar");
            yield return null;
        }

        [UnityTest]
        public IEnumerator PlanetsTest()
        {
            string url = "https://ssd.jpl.nasa.gov/api/horizons.api";

            // Setting query parameters
            DateTime today = DateTime.Now;
            string nowString = today.ToString("yyyy-MMM-d HH:mm");
            string ltrString = today.AddMinutes(10).ToString("yyyy-MM-d HH:mm");
            string[] planetNames = new string[] { 
                                "Sun", "Mercury", "Venus", "Earth", 
                                "Moon", "Mars", "Jupiter", "Saturn", 
                                "Uranus", "Neptune", "Pluto"
                                };
            int[] planetCodes = new int[] {10, 199, 299, 399, 301, 499, 599, 699, 799, 899, 999};
            PlanetData[] planetsData = new PlanetData[11];

            yield return null;

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
                    Transform planetPos = GameObject.Find(planetNames[i]).transform;
                    planetPos.position =  planetsData[i].ScaleDown();

                    Assert.AreEqual(planetsData[i].GetCoordinates(), planetPos.position, 
                            $"{planetNames[i]} expected: " + planetsData[i].GetCoordinates() +
                            " and actual value: " + planetPos.position);
                }
                else
                {
                    Debug.Log("Error making Horizons API request: " + request.error + " for " + planetCodes[i]);
                }
            }
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
            currPlanetData.SetCoordinates(Single.Parse(lines[2]), Single.Parse(lines[3]), Single.Parse(lines[4]));
        }
    }
}