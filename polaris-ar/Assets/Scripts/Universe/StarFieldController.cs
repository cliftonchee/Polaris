using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Polaris.Universe
{
    public class StarFieldController : MonoBehaviour
    {
        // ParticleSystem particleSystem;
        // ParticleSystem.Particle[] stars;
        StarDatabase starsDatabase;

        void Start()
        {
            // particleSystem = GetComponent<ParticleSystem>();
            // stars = new ParticleSystem.Particle[particleSystem.main.maxParticles];
            // int starsCount = particleSystem.GetParticles(stars);
            starsDatabase = new StarDatabase();

            for (int i = 0; i < 7; i++)
            {
                // starsDatabase.info[i].SphericalToCartesian();
                // stars[i].position = starsDatabase.info[i].GetPosition();
                Debug.Log(starsDatabase.info[i].name + " " + starsDatabase.info[i].GetPosition());
                // stars[i].remainingLifetime = Mathf.Infinity;
                // stars[i].startSize = 2.0f * (8.0f - starsDatabase.info[i].GetMag());
                // stars[i].startColor = Color.white * 0.1f * (8.0f - starsDatabase.info[i].GetMag());
            }

            // Apply the modified particle array back to the particle system
            //particleSystem.SetParticles(stars, starsCount);
        }
    }
}