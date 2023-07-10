using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PositionCamera : MonoBehaviour
{
    public Transform cameraTransform;
    private double longitude;
    private double latitude;
    // Start is called before the first frame update
    void Start()
    {
        GetUserLocation();
        RotateCamera();
    }

    // Initially was return type void, changed to IEnumerator
    // seems to get rid of error.
    public IEnumerator GetUserLocation()
    {
        if (!Input.location.isEnabledByUser)
        {
            Debug.Log("No Permission");
        }
        else
        {
            Debug.Log("Permission Granted");
            UnityEngine.Input.location.Start(500f, 500f);
            
            int maxWait = 5;
            while (Input.location.status == LocationServiceStatus.Initializing && maxWait > 0)
            {
                yield return new WaitForSeconds(1);
                maxWait--;
            }

            Debug.Log("Waiting before getting lat and lon");
            
            // Access granted and location value could be retrieved
            longitude = Input.location.lastData.longitude;
            latitude = Input.location.lastData.latitude;
            
            // AddLocation(latitude, longitude);
            Debug.Log("" + Input.location.status + "  lat:" + latitude + "  long:" + longitude);
            
            // Stop retrieving location
            Input.location.Stop();
        }
    }

    public void RotateCamera() 
    {
        float rotationX = (float) latitude - 90; // Mapping latitude to rotation around x-axis
        float rotationY = (float) longitude; // Mapping longitude to rotation around y-axis

        // Apply the rotation to the camera
        cameraTransform.rotation = Quaternion.Euler(rotationX, rotationY, 0f);
    }
}

// using UnityEngine;

// public class PositionCamera : MonoBehaviour
// {
//     private Gyroscope gyroscope;
//     public Transform cameraTransform;

//     private void Start()
//     {
//         // Check if gyroscope is available
//         if (SystemInfo.supportsGyroscope)
//         {
//             // Enable gyroscope
//             gyroscope = Input.gyro;
//             gyroscope.enabled = true;
//             Quaternion q = Input.gyro.attitude;

//             cameraTransform.rotation = new Quaternion(q.x, q.y, -q.z, -q.w);
//         }
//         else
//         {
//             Debug.Log("Gyroscope is not supported on this device.");
//         }
//     }

//     // private void Update()
//     // {
//     //     // Rotate game object based on gyroscope input
//     //     if (gyroscope != null)
//     //     {
//     //         // Get the gyroscope rotation rate
//     //         Quaternion q = Input.gyro.attitude;

//     //         cameraTransform.rotation = new Quaternion(q.x, q.y, -q.z, -q.w);
//     //     }
//     // }
// }
