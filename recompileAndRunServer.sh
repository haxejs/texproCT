#compile ionic code
ionic build --prod

#update chcp.json and chcp.manifest files
./node_modules/.bin/cordova-hcp build

#start http server
./node_modules/.bin/http-server ./www -p8100 -c-1