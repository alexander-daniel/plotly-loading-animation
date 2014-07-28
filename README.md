## Plotly Loading Animation Module

### Example
```javascript
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
```

### loadingBars(opts)
`opts` is an object, with the following params:

`canvasId` : HTML ID of the canvas you want to load into	 
`maxBarHeight` : Max Height of Moving Bars 	
`Width` : width of animation 	
`animateSpeed` : how often to update the bars (ms) 	

The module will automatically re-size the canvas to use the dimensions you provide in the opts to make it fit just right.


### Methods
loadingBars.startAnimation();
loadingBars.stopAnimation();

