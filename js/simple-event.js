var SimpleEvent = SimpleEvent || {};

(function(){
	"use strict";

	SimpleEvent = {
		events: [],

		on: function(target, name, callback) {
			this.events.push({
				target: target,
				name: name,
				callback: callback
			});
		},

		off: function(target, name, callback) {
			var self = this;
			var index;

			for (var i = 0; i < this.events.length; i++) {
				var event = this.events[i];

				this.eventMatched(event, [target, name, callback], function(){
					self.events.splice(i, 1);
					i--;
				});
			}
		},

		trigger: function(target, name) {
			for (var index in this.events) {
				var event = this.events[index];
				this.eventMatched(event, [target, name], function(){
					event.callback.apply(event, Array.prototype.slice.call(args, 1));
				});
			}
		},

		eventMatched: function(event, matchEvent, callback) {
			if (
				event.target === matchEvent[0] &&
				event.name === matchEvent[1]
			) {
				if (matchEvent[2]) {
					if (matchEvent[2] === event.callback) {
						callback();
					}
				} else {
					callback();
				}
			}
		},

		reset: function() {
			this.events = [];
		}
	};
}());

