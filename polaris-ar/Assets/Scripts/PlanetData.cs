using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlanetData 
{
    private int PlanetCode;
    private string Name;
    public float x;
    public float y;
    public float z;

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

    public Vector3 scaleDown()
    {
        // Scales down by 10^6
        return new Vector3(-this.z / 1000000f, this.y / 1000000f, this.x / 1000000f);
    }
}