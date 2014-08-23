(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var LoadingBars = require('../');

window.loadingBars = new LoadingBars('loading_animation', {width: 100, height: 1000, color: 'purple'});
 
window.loadingBars.startAnimation();


// stop animation after 5 seconds
setTimeout(function () {
	window.loadingBars.stopAnimation();
},5000);




},{"../":2}],2:[function(require,module,exports){
'use strict';

module.exports = LoadingBars;

function LoadingBars (canvasHolderId, config) {
    if (!(this instanceof LoadingBars)) {
        return new LoadingBars(canvasHolderId, config);
    }

    var self = this;
    self.canvas = null;

    self.config = deepExtend({
        width: 200, 
        height: 100,
        animateSpeed: 10,
        color: '#447adb',
        canvasId: 'PlotlyLoadingBars-canvas'
    }, config);
    
    self.element = document.getElementById(canvasHolderId);
    self.animating = false;

    self.bars = [
        {x:(self.config.width * 0.1), height:(self.config.height * 0.1), direction:'up'},
        {x:(self.config.width * 0.25), height:(self.config.height * 0.2), direction:'up'},
        {x:(self.config.width * 0.4), height:(self.config.height * 0.8), direction:'up'},
        {x:(self.config.width * 0.55), height:(self.config.height * 0.5), direction:'up'},
        {x:(self.config.width * 0.7), height:(self.config.height * 0.65), direction:'up'},
        {x:(self.config.width * 0.85), height:(self.config.height * 0.35), direction:'up'},
        {x:(self.config.width * 1.0), height:(self.config.height * 0.15), direction:'up'}
    ];
}


var proto = LoadingBars.prototype;

proto.createCanvas = function (canvasId) {
    var canvas = document.createElement('canvas');
    canvas.id = canvasId;

    canvas.height = this.config.height;
    canvas.width = this.config.width + (this.config.width * 0.125);

    return canvas;
};

proto.startAnimation = function () {
    var self = this;
    self.canvas = self.createCanvas(self.config.canvasId);
    self.element.appendChild(self.canvas);
    var ctx = self.canvas.getContext('2d');
    
    self.animating = setInterval(function () {
        ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
        
        self.bars.forEach(function(bar) {
            var y = self.config.height - bar.height;
            var width = (self.config.width * 0.125);

            ctx.fillStyle = self.config.color;
            ctx.fillRect(bar.x, y, width, bar.height);
            self.toggleDirectionIfMax(bar);
            self.changeSize(bar);
        });

    }, self.config.animateSpeed);
    
};

proto.stopAnimation = function () {
    var self = this;
    if (self.animating) {
        clearInterval(self.animating);
    }
};
    
proto.toggleDirectionIfMax = function (bar) {
    var self = this;
    if (bar.height >= self.config.height) {
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

proto.destroy = function () {
    var self = this;
    self.element.removeChild(self.canvas);
    self.canvas = null;
};

var deepExtend = function(out) {
    out = out || {};

    for (var i = 1; i < arguments.length; i++) {
        var obj = arguments[i];

        if (!obj)
            continue;

            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    if (typeof obj[key] === 'object')
                        deepExtend(out[key], obj[key]);
                    else
                    out[key] = obj[key];
                }
            }
        }
    return out;
};


},{}]},{},[1])