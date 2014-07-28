(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var loadingBars = require('../')({
	canvasId: 'loading_animation',
	maxBarHeight: 100,
	Width:200,
	animateSpeed:10
});

// on ready, start animatin' !
$(function() {
  loadingBars.startAnimation();
});


// stop animation after 5 seconds
// setTimeout(function () {
// 	loadingBars.stopAnimation();
// },5000);




},{"../":2}],2:[function(require,module,exports){
'use strict';

module.exports = LoadingBars;

function LoadingBars (config) {
  	if (!(this instanceof LoadingBars)) {
    	return new LoadingBars(config);
  	}

	var self = this;

	self.canvasId = config.canvasId;
  	self.canvas = document.getElementById(self.canvasId);
	self.ctx = self.canvas.getContext('2d');

	self.maxBarHeight = config.maxBarHeight || 100;
	self.Width = config.Width || 200;
	self.animateSpeed = config.animateSpeed || 10;
	self.animating = false;

	self.canvas.height = self.maxBarHeight;
	self.canvas.width = self.Width + (self.Width * 0.125);
	console.log(self.canvas.height);
	console.log(self.canvas.width);

	self.BARS = [
		{x:(self.Width * 0.1), height:(self.maxBarHeight * 0.1), direction:'up'},
		{x:(self.Width * 0.25), height:(self.maxBarHeight * 0.2), direction:'up'},
		{x:(self.Width * 0.4), height:(self.maxBarHeight * 0.8), direction:'up'},
		{x:(self.Width * 0.55), height:(self.maxBarHeight * 0.5), direction:'up'},
		{x:(self.Width * 0.7), height:(self.maxBarHeight * 0.65), direction:'up'},
		{x:(self.Width * 0.85), height:(self.maxBarHeight * 0.35), direction:'up'},
		{x:(self.Width * 1.0), height:(self.maxBarHeight * 0.15), direction:'up'},
	];
	//console.log(self.BARS);
}


var proto = LoadingBars.prototype;

proto.startAnimation = function () {
	var self = this;
	
	self.animating = setInterval(function () {
		self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
		
		self.BARS.forEach(function(bar) {
			//console.log(bar);
			self.ctx.fillStyle = '#447adb';
			self.ctx.fillRect(bar.x, self.maxBarHeight - bar.height, (self.Width * 0.125), bar.height);
			self.checkIfMax(bar);
			self.changeSize(bar);
		});

	}, self.animateSpeed);
	
};

proto.stopAnimation = function () {
	var self = this;
	if (self.animating) {
		clearInterval(self.animating)
	}
};
	
proto.checkIfMax = function (bar) {
	var self = this;
	if (bar.height >= self.maxBarHeight) {
		bar.direction = 'down';
	} else if (bar.height <= 0) {
		bar.direction = 'up';
	}
};

proto.changeSize = function (bar) {
	if (bar.direction === 'up') {
		bar.height ++;
	} else if (bar.direction === 'down') {
		bar.height --;
	}
};


},{}]},{},[1])
