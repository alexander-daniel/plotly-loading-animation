'use strict';

var loadingAnimation = require('./loading_module.js')({
	canvasId: 'loading_animation'
});

// on ready, start animatin' !
$(function() {
  loadingAnimation.animateBars();
});


// stop animation after 5 seconds
setTimeout(function () {
	loadingAnimation.stopAnimation();
},5000);



