# Cross browser wheel event

`wheel` event with `.deltaX` and `.deltaY` properties, following this [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/Events/wheel).

```js
jQuery( 'selector' ).on('wheel', function( event ) {
	console.log( event.deltaX, event.deltaY );
});
```

## Install

With [Bower](http://bower.io/).

  `bower install jquery.wheel.js`

Or download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/louisremi/jquery.wheel.js/master/dist/jquery.wheel.min.js
[max]: https://raw.github.com/louisremi/jquery.wheel.js/master/dist/jquery.wheel.js