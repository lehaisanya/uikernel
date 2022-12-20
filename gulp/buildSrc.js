/*
 * Copyright (с) 2015-present, SoftIndex LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 */

import gulp from 'gulp';
import babel from 'gulp-babel';
import {argv} from 'yargs';
import changed from 'gulp-changed';
import count from 'gulp-count';

function buildSrc() {
  return gulp.src(['src/**/*.{ts,tsx}'])
    .pipe(changed('lib', {hasChanged: changed.compareLastModifiedTime}))
    .pipe(count('babel transplit ## files'))
    .pipe(babel({sourceMap: argv.map ? 'inline' : false}))
    .pipe(gulp.dest('lib'));
}

export default buildSrc;
