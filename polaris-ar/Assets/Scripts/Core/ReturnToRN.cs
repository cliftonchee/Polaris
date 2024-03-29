using System;
using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine.UI;
using UnityEngine;

public class NativeAPI {
#if UNITY_IOS && !UNITY_EDITOR
    [DllImport("__Internal")]
    public static extern void sendMessageToMobileApp(string message);
#endif
}

namespace Polaris.Core
{
    public class ReturnToRN : MonoBehaviour
    {
        public void ButtonPressed()
        {
            if (Application.platform == RuntimePlatform.IPhonePlayer)
            {
    #if UNITY_IOS && !UNITY_EDITOR
                NativeAPI.sendMessageToMobileApp("The button has been tapped!");
                
    #endif
            }
        }
    }
}