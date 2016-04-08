const gulp = require('gulp');
const babelify = require('babelify');

gulp.task('make', () => {
  const bro = require('gulp-bro');
  gulp.src('src/app.js', { read: false })
    .pipe(bro({
      transform: [babelify.configure({ presets: ['es2015', 'react'] })],
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('doc', () => {
  const jsdoc = require('gulp-jsdoc3');
  gulp.src('src/**/*.js', { read: false }).pipe(jsdoc({
    opts: { destination: './doc/' },
  }));
});

gulp.task('lint', () => {
  const eslint = require('gulp-eslint');
  return (
    gulp.src('src/**/*.js')
      .pipe(eslint())
      .pipe(eslint.format())
  );
});

gulp.task('test', ['lint'], () => {
  const mocha = require('gulp-mocha');
  return gulp.src('test/*.js', { read: false })
		.pipe(mocha());
});

gulp.task('default', ['make'], () => (
  gulp.watch('src/**/*.js', ['make'])
));
