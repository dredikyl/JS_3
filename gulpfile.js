const {task, series, parallel, src, dest, watch} = require('gulp');
const browserSync = require('browser-sync');
const notify = require('gulp-notify');



const path = {
  htmlFiles: './*.html',
  jsFiles: './js/**/*.js'
};

function syncInit() {
  browserSync({
    server: {baseDir: './'},
    notify: false
  });
}

async function sync() {
  browserSync.reload();
}

function watchFiles() {
  syncInit();
  watch(path.htmlFiles, sync);
  watch(path.jsFiles, sync);

}

task('watch', watchFiles);
