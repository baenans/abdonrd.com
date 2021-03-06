/**
 * @license
 * Copyright (c) 2016 Abdón Rodríguez Davila (@abdonrd). All rights reserved.
 * This code may only be used under the MIT style license found at https://abdonrd.github.io/LICENSE.txt
 */

'use strict';

const uglify = require('gulp-uglify');

function minify() {
  return uglify();
}

module.exports = {
  minify: minify
};
