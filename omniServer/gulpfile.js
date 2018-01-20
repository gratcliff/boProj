'use strict';

const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const tslint = require('gulp-tslint');
const shell = require('gulp-shell');
const env = require('gulp-env');

gulp.task('clean', function () {
  return gulp.src(outDir, { read: false })
    .pipe(rimraf());
});

gulp.task('tslint', () => {
  return gulp.src('src/**/*.ts')
    .pipe(tslint( {
      formatter: 'prose'
    }))
    .pipe(tslint.report());
});

function compileTS(args, cb) {
  return exec(tscCmd + args, (err, stdout, stderr) => {
    console.log(stdout);

    if (stderr) {
      console.log(stderr);
    }
    cb(err);
  });
}

gulp.task('compile', shell.task([
  'npm run tsc',
]))


gulp.task('configs', (cb) => {
  return gulp.src("src/configurations/*.json")
    .pipe(gulp.dest('./build/src/configurations'));
});

gulp.task('build', ['tslint', 'compile', 'configs'], () => {
  console.log('Building the project ...');
});

gulp.task('default', ['build']);
