#compile ionic code
ionic build --prod

#update chcp.json and chcp.manifest files
./node_modules/.bin/cordova-hcp build

#create binary build
cordova build --release android

#code sign, both passwords are 123456
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore android-release-key.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk dtrcloud

#zip align
rm -f ./platforms/android/build/outputs/apk/android-release-signed.apk
/Users/Shared/android/android-sdk/build-tools/23.0.1/zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk ./platforms/android/build/outputs/apk/android-release-signed.apk

#install apk
adb install platforms/android/build/outputs/apk/android-release-signed.apk

#debug
#adb logcat chromium:D SystemWebViewClient:D *:S