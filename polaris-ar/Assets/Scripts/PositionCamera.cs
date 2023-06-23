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
        float rotationX = (float) latitude; // Mapping latitude to rotation around x-axis
        float rotationY = (float) longitude; // Mapping longitude to rotation around y-axis

        // Apply the rotation to the camera
        cameraTransform.rotation = Quaternion.Euler(rotationX, rotationY, 0f);
    }
}
