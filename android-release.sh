#release package
ionic cordova build --release --prod android

#code sign, both passwords are 123456
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore android-release-key.keystore ./platforms/android/build/outputs/apk/android-release-unsigned.apk dtrcloud

#zip align
/Users/Shared/android/android-sdk/build-tools/23.0.1/zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk ./platforms/android/build/outputs/apk/android-release-signed.apk