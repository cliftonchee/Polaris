using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

public class ScaleSlider : MonoBehaviour
{
   // private GameObject[] planets;
    private Slider slider;
    private Vector3 localTrf;
    // Start is called before the first frame update
    void Start()
    {
        //planets = GameObject.FindGameObjectsWithTag("Planet");
        slider = GameObject.Find("Slider").GetComponent<Slider>();
        slider.onValueChanged.AddListener(ScaleSliderUpdate);
        localTrf = this.gameObject.transform.localScale;
    }

    void ScaleSliderUpdate(float value)
    {
        // foreach(GameObject planet in planets) 
        // {
            this.gameObject.transform.localScale = Vector3.Scale(localTrf,
                                                new Vector3(value, value, value));
        //}
    }
}
