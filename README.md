# Polaris

![issues](https://img.shields.io/github/issues/cliftonchee/Polaris)
![pr](https://img.shields.io/github/issues-pr/cliftonchee/Polaris)

VR Stargazing app using Unity AR Foundation

## Made With

<p align='center'>
<img src='https://img.shields.io/badge/-React-61FADB?logo=react&logoColor=white'>
<img src='https://img.shields.io/badge/-Unity-ffffff?logo=unity&logoColor=black'>
<img src='https://img.shields.io/badge/-Firebase-FFCA28?logo=firebase&logoColor=orange'>
<img src='https://img.shields.io/badge/-Python-3776AB?logo=python&logoColor=yellow'>
</p>

## Installation

Can also refer to README document.

1. Download XCode

2. Download Unity (ver. 2021.3.24f1)

3. Open Unity Hub
- Under “Installs”, click settings icon of this version, click “Add modules”
- Install iOS Build Support

4. In “Projects” tab, click “Open” button (beside “New Project”)
- Find Polaris folder -> polaris-ar folder
- Open “polaris-ar” folder

5. At the top taskbar, click “File” -> “Build Settings…”
- Click iOS under “Platform” and check “Development Build”
- Click “Switch Platform”

6. Press “Build” under Build Settings
- Press “New Folder”, then add “builds” folder
- Press “Choose’
- Press “Build And Run’

7. Xcode should throw an error (sign-in certificate)
- Double-click the error
- Click “Signing & Capabilities tab”
- Check “Automatically manage signing”
- Click Team dropdown box, then “Add an account”
- Use “yeoclifton123@gmail.com” & “Orbitaltest123!” for the account
- Bundle identifier: “com.Polaris.polarisappar”

9. Connect phone to laptop via cable

10. Enable Developer mode
- Settings -> Privacy & Security -> Developer Mode -> Check box -> Restart Phone

11. On Xcode, click the target to be your iPhone

12. Press the Play Button on top-left.

13. Trust Developer on your device
General -> VPN & Device Management -> Developer app -> Trust

14. App will run.

(Video link: https://www.youtube.com/watch?v=-Hr4-XNCf8Y)

Full App

1. Pull from GitHub

2. Follow AR testing steps.

3. Go to Xcode.
- “Open a project or file”
- Find Polaris folder -> “ios” -> open “ios.xcworkspace”

4. In terminal, run following commands:
- npm install
- cd ios
- pod install

5. Under bundle identifier: use “polarisapp123” with the same account

6. Press the Play button. (Requires both devices to be on same Wi-Fi network)

6. Should see “codesign wants to access key…”
- Key password of laptop
- Press “Always Allow”

7. Trust Developer similar to AR process

8. Run again. (if loads directly into Unity, try running again)


## NUS Orbital Project '23

AY22/23 Summer Project

Achievement Level: Artemis

Contributors: Chee Wei Xiong Clifton & Ryan Peh Wye Kin

## Motivation:

Being avid stargazers ourselves, we feel it is a shame that there are those who have never experienced the beauty of the universe and the sheer scale of it. In light-polluted Singapore, we wanted to share a glimpse of that joy with those that were never given the opportunity, anywhere, at any time, through the convenience of their phones. In doing so, we hope that users will be more keen to learn more and appreciate the vast space that we call home.

Therefore, we intend to fill this gap between willingness to stargaze and the ability to do so by developing an AR based stargazing app. This app will allow its users to “see” the stars even through the poor conditions in Singapore.

## Aim:

We plan to develop an Augmented Reality (AR) application on our mobile phones that provide an experience similar to stargazing. Currently, there are apps such as “Night Sky” and “Sky Light” which provide similar experiences but have many features locked behind paywalls. We also plan to expand on certain features such as being able to click on a star to learn more about them and provide latest updates on the star. Possible other features may include an encyclopedia or a filter of the stars categorised according to their subtypes (e.g. white dwarfs) and a size comparison feature to showcase the scale of the universe.
