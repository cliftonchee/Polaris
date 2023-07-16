using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class StarDatabase
{
    public StarData[] info = new StarData[]
    {
        // Ursa Minor Constellation feom VizieR database
        new StarData("Polaris",2.533333f, 89.266667f, 2.02f),
        new StarData("Yildun", 17.533333f, 86.583333f, 4.36f),
        new StarData("Epsilon Ursae Minoris", 16.766667f, 82.033333f, 4.23f),
        new StarData("Eta Ursae Minoris", 16.291667f, 75.755555f, 4.95f),
        new StarData("Zeta Ursae Minoris", 15.733333f, 77.783333f, 4.32f),
        new StarData("Pherkad", 15.35f, 71.833333f, 3.05f),
        new StarData("Kochab", 14.85f, 74.15f, 2.08f)
    };
}
