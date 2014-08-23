## Plotly Loading Animation Module

### Example
```javascript
var LoadingBars = require('plotly-loading-bars');

var loadingBars = new LoadingBars('loading_animation', {
	canvasId: 'my_cavas_id'
	width: 200,
	height: 100,
	color: 'blue',
	animateSpeed: 10,
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

### loadingBars(canvasHolderId, config)
`canvasHolderId` is the ID of the element you want to append the canvas to.
`config` is an object, with the following params:

`canvasId` : HTML ID that you want to give your canvas.  
`height` : Max height of moving bars 	
`width` : width of animation  	
`color` : bar color (accepts hex)  
`animateSpeed` : how often to update the bar size (ms) 	 

The module will automatically re-size the canvas to use the dimensions you provide in the config to make it fit just right.

### Methods
`loadingBars.startAnimation();` : Creates the Canvas and starts animation 	
`loadingBars.stopAnimation();` : Stops Animation 	
`loadingBars.destroy()` : Destroys the Canvas

`loadingBars.animating` : returns true if currently animating

