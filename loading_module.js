'use strict';

module.exports = LoadingAnimation;

function LoadingAnimation (config) {
  	if (!(this instanceof LoadingAnimation)) {
    	return new LoadingAnimation(config);
  	}

	var self = this;

	self.maxBarHeight = config.maxBarHeight || 100;
	self.maxBarWidth = config.maxBarWidth || 30;
	self.canvasId = config.canvasId;
	self.animateSpeed = config.animateSpeed || 10;
  	self.canvas = document.getElementById(self.canvasId);
	self.ctx = self.canvas.getContext('2d');

	self.BARS = [
		{x:20, height:10, direction:'up'},
		{x:50, height:20, direction:'up'},
		{x:80, height:80, direction:'up'},
		{x:110, height:50, direction:'up'},
		{x:140, height:65, direction:'up'},
		{x:170, height:35, direction:'up'},
		{x:200, height:15, direction:'up'},
	];
	console.log(self.BARS);
}


var proto = LoadingAnimation.prototype;

proto.animateBars = function () {
	var self = this;
	self.animating = setInterval(function () {
		self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
		
		self.BARS.forEach(function(bar) {
			console.log(bar);
			self.ctx.fillStyle = '#447adb';
			self.ctx.fillRect(bar.x, 100 - bar.height, 25, bar.height);
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
	if (bar.height >= self.canvas.height) {
		bar.direction = 'down';
	} else if (bar.height === 0) {
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

