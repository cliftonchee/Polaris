using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.TestTools;

namespace Tests.EditMode
{
    public class DirectionTest
    {
        [Test]
        public void North()
        {
            GameObject north = GameObject.Find("North");
            Assert.AreEqual(new Vector3(0, 0, 100), north.GetComponent<RectTransform>().anchoredPosition3D);
        }

        [Test]
        public void South()
        {
            GameObject south = GameObject.Find("South");
            Assert.AreEqual(new Vector3(0, 0, -100), south.GetComponent<RectTransform>().anchoredPosition3D);
        }

        [Test]
        public void East()
        {
            GameObject east = GameObject.Find("East");
            Assert.AreEqual(new Vector3(100, 0, 0), east.GetComponent<RectTransform>().anchoredPosition3D);
        }

        [Test]
        public void West()
        {
            GameObject west = GameObject.Find("West");
            Assert.AreEqual(new Vector3(-100, 0, 0), west.GetComponent<RectTransform>().anchoredPosition3D);
        }
    }
}