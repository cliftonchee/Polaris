using System.Collections;
using System.Collections.Generic;
using UnityEngine;

namespace Polaris.Core
{
    public class RotateText : MonoBehaviour
    {
        public PositionCamera refCamera;
        [SerializeField] public float distFromObj = 1.2f;
        private Vector3 parent;

        void Start()
        {
            // To bring text closer to AR camera so text is always visible
            parent = transform.parent.position;
        }
        void Update()
        {
            // Get the direction from the text object to the camera
            Vector3 directionToCamera = refCamera.transform.position - transform.position;

            // Calculate the rotation to face the camera
            Quaternion rotationToCamera = Quaternion.LookRotation(directionToCamera, refCamera.transform.up);

            // Apply the rotation to the text object
            transform.rotation = rotationToCamera;
        }
    }
}