'use strict';

var LoadingBars = require('../');

var = loadingBars = new LoadingBars('loading_animation', {
	width: 100,
	height: 1000,
	color: 'purple'
});
 
loadingBars.startAnimation();

// stop animation after 5 seconds
setTimeout(function () {
	loadingBars.stopAnimation();
},5000);



