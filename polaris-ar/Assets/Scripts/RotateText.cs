using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RotateText : MonoBehaviour
{
    public PositionCamera refCamera;
    [SerializeField] public float distFromObj = 1.2f;
    private float isPositive = 1f;
    private RectTransform rec;
    private Vector3 parent;

    void Start()
    {
        // To bring text closer to AR camera so text is always visible
        parent = transform.parent.position;
        rec = GetComponent<RectTransform>();
    }
    void Update()
    {
        // Get the direction from the text object to the camera
        Vector3 directionToCamera = refCamera.transform.position - transform.position;

        // Calculate the rotation to face the camera
        Quaternion rotationToCamera = Quaternion.LookRotation(directionToCamera, refCamera.transform.up);

        // Apply the rotation to the text object
        transform.rotation = rotationToCamera;

        // // Checks for x
        // if (parent.x < 0)
        // {
        //     isPositive = -1f;
        // }
        // rec.anchoredPosition3D = new Vector3(distFromObj * isPositive, rec.anchoredPosition3D.y, rec.anchoredPosition3D.z);
        // //transform.localPosition = new Vector3(distFromObj * isPositive, transform.localPosition.y, transform.localPosition.z);
        // isPositive = 1f;

        // // Checks for y
        // if (parent.y < 0)
        // {
        //     isPositive = -1f;
        // }
        // rec.anchoredPosition3D = new Vector3(rec.anchoredPosition3D.x, distFromObj * isPositive, rec.anchoredPosition3D.z);
        // //transform.localPosition = new Vector3(transform.localPosition.x, distFromObj * isPositive, transform.localPosition.z);
        // isPositive = 1f;

        // // Checks for z
        // if (parent.z < 0)
        // {
        //     isPositive = -1f;
        // }
        // //transform.localPosition = new Vector3(transform.localPosition.x, transform.localPosition.y, distFromObj * isPositive);
        // rec.anchoredPosition3D = new Vector3(rec.anchoredPosition3D.x, rec.anchoredPosition3D.y, distFromObj * isPositive);
        // isPositive = 1f;
    }
}
