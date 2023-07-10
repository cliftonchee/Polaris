using System.Collections;
using System.Collections.Generic;
using UnityEngine;

[RequireComponent(typeof(ParticleSystem))]
public class ControlGlow : MonoBehaviour
{
    private ParticleSystem ps;
    public Camera originCamera;
    [SerializeField] float particleSize = 3f;
    // Start is called before the first frame update
    void Start()
    {
        ps = GetComponent<ParticleSystem>();
        var main = GetComponent<ParticleSystem>().main;
        main.startSize = particleSize;
    }

    // Update is called once per frame
    void Update()
    {
        // // Convert object's position to viewport coordinates
        Vector3 viewportPoint = originCamera.WorldToViewportPoint(transform.position);

        // Check if the object is in the middle of the screen (within a specific range)
        if (Mathf.Abs(viewportPoint.x - 0.5f) <= 0.1f && Mathf.Abs(viewportPoint.y - 0.5f) <= 0.1f)
        {
            GetComponent<ParticleSystem>().Play();
        }
        else
        {
            GetComponent<ParticleSystem>().Stop();
        }
    }
}
