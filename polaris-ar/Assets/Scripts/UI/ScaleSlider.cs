using System.Collections;
using System.Collections.Generic;
using UnityEngine.UI;
using UnityEngine;

namespace Polaris.UI
{
    public class ScaleSlider : MonoBehaviour
    {
        private Slider slider;
        private Vector3 localTrf;

        void Start()
        {
            //planets = GameObject.FindGameObjectsWithTag("Planet");
            slider = GameObject.Find("Slider").GetComponent<Slider>();
            slider.onValueChanged.AddListener(ScaleSliderUpdate);
            localTrf = this.gameObject.transform.localScale;
        }

        void ScaleSliderUpdate(float value)
        {
            this.gameObject.transform.localScale = Vector3.Scale(localTrf,
                                                    new Vector3(value, value, value));
        }
    }
}