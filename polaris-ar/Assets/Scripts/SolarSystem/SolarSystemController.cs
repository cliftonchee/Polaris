using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Polaris.SolarSystem
{
    public class SolarSystemController : MonoBehaviour
    {
        readonly float G = 100f;
        GameObject[] planets;

        // Start is called before the first frame update
        void Start()
        {
            planets = GameObject.FindGameObjectsWithTag("Planet");

            InitialVelocity();
        }

        private void FixedUpdate() {
            Gravity();
        }

        void Gravity()
        {
            foreach(GameObject p1 in planets)
            {
                foreach(GameObject p2 in planets)
                {
                    if (!p1.Equals(p2)) // only affects planets other than itself
                    {
                        float m1 = p1.GetComponent<Rigidbody>().mass;
                        float m2 = p2.GetComponent<Rigidbody>().mass;
                        float r = Vector3.Distance(p1.transform.position, p2.transform.position);

                        p1.GetComponent<Rigidbody>().AddForce((
                            p2.transform.position - p1.transform.position).normalized *
                                (G * (m1 * m2) / (r * r))); // Newton's Law of Universal Gravitiation
                    }
                }
            }
        }

        void InitialVelocity()
        {
            foreach(GameObject p1 in planets)
            {
                foreach(GameObject p2 in planets)
                {
                    if (!p1.Equals(p2))
                    {
                        float m2 = p2.GetComponent<Rigidbody>().mass;
                        float r = Vector3.Distance(p1.transform.position, p2.transform.position);
                        p1.transform.LookAt(p2.transform);

                        p1.GetComponent<Rigidbody>().velocity += p1.transform.right * 
                            Mathf.Sqrt((G * m2) / r); // Circular orbit instant velocity formula
                    }
                }
            }
        }
    }
}