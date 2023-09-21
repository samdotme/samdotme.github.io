var gulp = require('gulp');
var imageResize = require('gulp-image-resize');
 
gulp.task('default', function () {
  gulp.src('assets/images/*')
    .pipe(imageResize({
      width : 200,
      height : 200,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('assets/thumbnails'));
});