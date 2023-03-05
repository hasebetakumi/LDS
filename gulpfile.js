const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minifyCSS = require('gulp-clean-css');
const concat = require('gulp-concat')

const compile = () => {
    return src('src/styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(concat('bundle.css'))
        .pipe(dest('src/styles'));
}

const watchFile = () => {
    watch('src/styles/scss/**/*.scss', series(compile))
}

exports.compile = compile;

exports.default = watchFile;

