'use strict';

var loadingBars = require('./index')({
	canvasId: 'loading_animation',
	maxBarHeight: 25,
	Width:50,
	animateSpeed:30
});

// on ready, start animatin' !
$(function() {
  loadingBars.startAnimation();
});


// stop animation after 5 seconds
setTimeout(function () {
	loadingBars.stopAnimation();
},5000);



