#build ionic source code
ionic build

#local hot code push dev
./node_modules/.bin/cordova-hcp server &

sleep 20

#build and install binary app 
cordova run android

#debug
adb logcat chromium:D SystemWebViewClient:D *:S
