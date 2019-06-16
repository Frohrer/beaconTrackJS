# beaconTrackJS
BeaconTrackJS is a Node/Express server that can be used for hosting tracking images and other files. 
When a client requests a file it will display the file name and request details. This is useful when tracking emails for example.
Even invalid requests will be shown, so you do not actually need to provide a valid file.

Insert this into your target HTML: img src="[YOUR_IP]/1.png" alt="1" height="1" width="1"

Requirements:
*Node.JS
*Express
*PUG - leave this out if you only need static files served.

Use at your own discretion/risk! 
