/*! jquery.wheel.js - v0.1.2 - 2015-05-15
* https://github.com/louisremi/jquery.wheel.js
* Copyright (c) 2015 Louis-Rémi Babé; Licensed MIT */
(function($) {
	'use strict';

	// event data that will be passed to the handler
	var fixWheel = {
		props: $.event.mouseHooks.props.concat('deltaMode', 'deltaX', 'deltaY', 'deltaZ'),
		filter: $.event.mouseHooks.filter
	};

	// Don't polyfill wheel event in browsers supporting it
	// IE has no onwheel attribute, but earliest implementations might not have
	// WheelEvent constructor
	if ( 'onwheel' in window || 'WheelEvent' in window ) {
		$.event.fixHooks.wheel = fixWheel;
		return;
	}

	$.event.fixHooks.mousewheel = fixWheel;

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
