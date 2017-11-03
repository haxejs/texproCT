var gulp = require('gulp');
var watch = require('gulp-watch');
var chcpContext = require('./node_modules/cordova-hot-code-push-cli/dist/context.js');
var build = require('./node_modules/cordova-hot-code-push-cli/dist/build.js');

function buildChcp() {
	var context = chcpContext.context({});
    build.execute(context);
}

gulp.task('liveupdate', function(){
	buildChcp();
    return watch(['www/assets/','www/build/'],function(vinyl){
    	buildChcp();
    });
});