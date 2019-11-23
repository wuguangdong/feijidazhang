


//var gulp = require("gulp");
//gulp.task("one", function(){
//	console.log("one");
//	gulp.src("src/html/05_dafeiji.html")
//			.pipe(gulp.dest("dest/html"))
//});
//
//gulp.task("two", function()){
//	console.log("two");
//}
//gulp.task("three",["one","two"],function()){
//	console.log("three");
//}


//gulp.task("defalut", function(){
//	console.log("默认任务");
//})

//gulp.task("defalut",["one","two"]);
	
//var obj = {
//	removeComments: true, //清除HTML注释
//	collapseWhitespace: true, //压缩HTML
//	collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==> <input checked/>
//	removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
//	removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
//	removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
//	minifyJS: true, //压缩页面JS
//	minifyCSS: true //压缩页面CSS
//}
	
var gulp = require('gulp');
var babel = require('gulp-babel'); //es6转es5
//var uglify = require('gulp-uglify'); //js压缩插件	

//var htmlmin = require("gulp-htmlmin"); 
var uglify = require("gulp-uglify");
//var rename = require("gulp-rename");
var minifyCss = require('gulp-minify-css'); //css压缩插件
gulp.task('jsTask', function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets": ["es2015"]})) //es6转es5
	.pipe(uglify()) //js压缩
	.pipe(gulp.dest('dest/js'));
})
gulp.task('jsTask2', function(){
	console.log(5555)
	gulp.src('css/*.css')
	.pipe(minifyCss()) //js压缩
	.pipe(gulp.dest('dest/css'));
})
gulp.task("default",["jsTask2","jsTask"])






























