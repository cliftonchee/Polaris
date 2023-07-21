using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Polaris.SolarSystem
{
    public class PlanetData 
    {
        private int PlanetCode;
        private string Name;
        private float x;
        private float y;
        private float z;

        public PlanetData(string name, int planetCode)
        {
            this.PlanetCode = planetCode;
            this.Name = name;
        }

        public void setCoordinates(float x, float y, float z)
        {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        // Converted to Unity coordinate system
        public Vector3 getPosScaled()
        {
            return new Vector3(-this.x / 1000000f , this.y / 1000000f , -this.z / 1000000f);
        }

        // Flip x and z to fit our scale
        public Vector3 adjustedScaleDown()
        {
            // Scales down by 10^6
            return new Vector3(-this.z / 1000000f, this.y / 1000000f, this.x / 1000000f);
        }


    }
}