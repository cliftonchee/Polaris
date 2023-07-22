using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Polaris.Universe
{
    public class StarData
    {
        private float ra;
        private float dec;
        private float r;
        private float mag;
        private float x;
        private float y;
        private float z;
        public string name;

        public StarData(string name, float ra, float dec, float mag)
        {
            this.name = name;
            this.ra = ra;
            this.dec = dec;
            this.mag = mag;
            this.r = 2f;
        }

        public StarData(string name, float ra, float dec, float mag, float r)
        {
            this.name = name;
            this.ra = ra;
            this.dec = dec;
            this.mag = mag;
            this.r = r;
        }

        public void SphericalToCartesian()
        {
            this.ra = this.ra * (-15.0f) * Mathf.Deg2Rad;
            this.dec = this.dec * Mathf.Deg2Rad;
            this.dec = (Mathf.PI / 2) - this.dec;
            var rr = r * Mathf.Sin(dec);
            this.z = rr * Mathf.Cos(ra);
            this.x = rr * Mathf.Sin(ra);
            this.y = r * Mathf.Cos(dec);
        }

        public Vector3 GetPosition() // relative to Unity
        {
            SphericalToCartesian();
            return new Vector3(this.x, this.y, this.z);
        }

        public float GetMag() 
        {
            return this.mag;
        }
    }
}