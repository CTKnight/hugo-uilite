/*
*=================================
* Hugo UILite Portfolio v0.8
*=================================
*
* Free version https://uicard.io/products/hugo-uilite
* Pro version https://uicard.io/products/hugo-uilite-pro
* Demo https://demo.uicard.io/hugo-uilite-portfolio-demo/
*
* Coded By UICardio
*
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*
*/

/**
 * Jiewen Lai (2018) All rights reserved.
 * remove the unused code and tranpiled by babel
 */

"use strict";

$(document).ready(function () {
  var elements = $(".sidebar > .main-info *");
  var initTime = 100;
  var _loop = function _loop(i) {
    setTimeout(function () {
      $(elements[i].tagName).addClass("bs");
    }, 50 * i + initTime);
  };

  for (var i = 0; i < elements.length; i++) {
    _loop(i);
  }

  setTimeout(function () {
    $(".main-content").addClass("active");
  }, 500);
});