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
setTimeout(function () {
	loadingBars.stopAnimation();
},5000);



