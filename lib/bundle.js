/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.onload = function () {
  var ctx = new AudioContext();
  var audio = document.getElementById('audio');
  var audioSrc = ctx.createMediaElementSource(audio);
  var analyser = ctx.createAnalyser();
  audioSrc.connect(ctx.destination);
  audioSrc.connect(analyser);
  var frequencyData = new Uint8Array(analyser.frequencyBinCount);

  window.ctx = ctx;
  window.frequencyData = frequencyData;
  window.average = function (numArray) {
    return numArray.reduce(function (acc, val) {
      return acc + val;
    }, 0) / 1024;
  };

  function renderFrame() {
    requestAnimationFrame(renderFrame);
    analyser.getByteFrequencyData(frequencyData);
  }

  audio.play();
  renderFrame();
};

document.addEventListener("DOMContentLoaded", function () {
  var playButton = document.querySelector(".fa-play");
  var pauseButton = document.querySelector(".fa-pause");
  var audio = document.getElementById('audio');

  playButton.addEventListener("click", function () {
    audio.play();
    playButton.style.color = "indigo";
    pauseButton.style.color = "black";
  });

  pauseButton.addEventListener("click", function () {
    audio.pause();
    playButton.style.color = "black";
    pauseButton.style.color = "indigo";
  });
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map