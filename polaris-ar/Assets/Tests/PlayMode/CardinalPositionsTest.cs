using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Tests.PlayMode
{
    public class CardinalPositionsTest
    {
        private GameObject north;
        private GameObject south;
        private GameObject east;
        private GameObject west;

        [UnitySetUp]
        public IEnumerator Setup()
        {
            UnityEngine.SceneManagement.SceneManager.LoadScene("polaris-ar");
            yield return null;

            // Find the GameObject by name in the test scene
            north = GameObject.Find("North");
            Assert.IsNotNull(north, "North not found in the scene.");
            south = GameObject.Find("South");
            Assert.IsNotNull(south, "South not found in the scene.");
            east = GameObject.Find("East");
            Assert.IsNotNull(east, "East not found in the scene.");
            west = GameObject.Find("West");
            Assert.IsNotNull(west, "West not found in the scene.");
            
        }

        [UnityTest]
        public IEnumerator CardinalsTest()
        {
            Vector3 expectedNorthPosition = new Vector3(0f, 0f, 100f);
            Vector3 expectedSouthPosition = new Vector3(0f, 0f, -100f);
            Vector3 expectedEastPosition = new Vector3(100f, 0f, 0f);
            Vector3 expectedWestPosition = new Vector3(-100f, 0f, 0f);

            // Wait for one frame to ensure the GameObject is fully initialized
            yield return null;

            // Check if the GameObject's position matches the expected position
            Assert.AreEqual(expectedNorthPosition, north.GetComponent<RectTransform>().anchoredPosition3D,
                "North is not at the expected position.");
            Assert.AreEqual(expectedSouthPosition, south.GetComponent<RectTransform>().anchoredPosition3D,
                "South is not at the expected position.");
            Assert.AreEqual(expectedEastPosition, east.GetComponent<RectTransform>().anchoredPosition3D,
                "East is not at the expected position.");
            Assert.AreEqual(expectedWestPosition, west.GetComponent<RectTransform>().anchoredPosition3D,
                "West is not at the expected position.");
        }
    }
}