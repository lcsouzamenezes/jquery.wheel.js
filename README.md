# Cross browser wheel event

`wheel` event with `.deltaX` and `.deltaY` properties, following this [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/Events/wheel).

## Getting Started

Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/louisremi/jquery.wheel.js/master/dist/jquery.wheel.min.js
[max]: https://raw.github.com/louisremi/jquery.wheel.js/master/dist/jquery.wheel.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/jquery.wheel.min.js"></script>
<script>
jQuery( 'selector' ).on('wheel', function( event ) {
	console.log( event.deltaX, event.deltaY );
});
</script>
```