const { src, dest, task, series } = require("gulp");
const rm = require( 'gulp-rm' );
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const sassGlob = require('gulp-sass-glob');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');

const styles = [
    "node_modules/normalize.css/normalize.css",
    "src/css/main.scss",
    "src/css/layout.scss",
    "src/css/sprite.scss",
    "src/css/media.scss"
]
const objectsTobeDeleted = [
    "dist/**/*",
    "!dist/index.html"
]
const scripts = [
    "src/scripts/*.js",
    "!src/scripts/jquery-lib.js"
]

task( 'clean', () => {
    return src( objectsTobeDeleted, { read: false }).pipe( rm() )
});

task( 'copy', () => {
    return src('**').pipe(dest('docs'))
});

task( 'scripts', () => {
    return src(scripts)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(dest('docs'));
});

task( 'styles', () => {
    return src(styles)
    .pipe(concat('main.scss'))
    .pipe(sassGlob())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(dest('docs'));
});



task('default', series('clean', 'styles', 'scripts'))

