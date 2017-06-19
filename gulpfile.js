const gulp = require('gulp');
const less = require('gulp-less');
const fileinclude  = require('gulp-file-include');
const autoprefixer = require('gulp-autoprefixer');
//编译less文件,兼容ie6
gulp.task('less',function(){
	gulp.src(['./res/less/style.less','./res/less/ie.less'])
	.pipe(less())
	.pipe(autoprefixer({
        browsers: ['last 6 versions'],
    }))
	.pipe(gulp.dest('./res/css'))
});
// 适配所有html，排除include文件夹中html
gulp.task('fileinclude', function() {
    gulp.src(['./page/*.html','!./page/include/*.html'])
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('webapp'));
});
gulp.task('default', function(){
	//监听文件变化
    gulp.watch(['./res/less/*.less','./page/**/*.html'], ['less','fileinclude']);
});