/*! jquery.wheel.js - v0.1.0 - 2014-08-12
* https://github.com/louisremi/jquery.wheel.js
* Copyright (c) 2014 Louis-Rémi Babé; Licensed MIT */
(function($) {
	'use strict';

	// Always proxy event data to handlers
	$.event.fixHooks.wheel = {
		props: $.event.mouseHooks.props.concat('deltaMode', 'deltaX', 'deltaY', 'deltaZ'),
		filter: $.event.mouseHooks.filter
	};

	// Don't polyfill wheel event in Chrome and Firefox
	if ( 'onwheel' in window ) {
		return;
	}

	$.event.special.wheel = {
		setup: function() {
			$(this).bind( 'mousewheel', mousewheelHandler );
		},
		teardown: function() {
			$(this).bind( 'mousewheel', mousewheelHandler );
		},
		add: function( handleObj ) {
			var oldHandler = handleObj.handler;

			handleObj.handler = function( event, deltaX, deltaY ) {
				event.deltaMode = 1;
				event.deltaX = deltaX || 0;
				event.deltaY = deltaY;
				event.deltaZ = 0;

				return oldHandler.apply( this, arguments );
			};
		}
	};

	function mousewheelHandler( event ) {
		// change type
		event.type = 'wheel';

		// re-trigger event
		$(event.currentTarget).triggerHandler(event, [
			event.originalEvent.wheelDeltaX && ( - 1/40 * event.originalEvent.wheelDeltaX ),
			- 1/40 * event.originalEvent.wheelDelta
		]);
	}

})(jQuery);