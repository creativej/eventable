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
			var result = this.events;

			for (var index in this.events) {
				var event = this.events[index];

				if (
					event.target === target &&
					event.name === name
				) {
					result.splice(index, 1);
				}
			}

			this.events = result;
		},

		trigger: function(target, name) {
			for (var index in this.events) {
				var event = this.events[index];
				if (
					event.target === target &&
					event.name === name
				) {
					event.callback();
				}
			}
		},

		clear: function() {
			this.events = [];
		}
	};
}());

