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

	self.maxBarHeight = config.maxBarHeight || self.canvas.height || 100;
	self.Width = config.Width || 200;
	self.animateSpeed = config.animateSpeed || 10;
	self.animating = false;

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

