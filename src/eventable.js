(function(window) {
	'use strict';

	// Add ECMA262-5 Array methods if not supported natively
	if (!Array.prototype.indexOf) {
		Array.prototype.indexOf = function(find, i /*opt*/) {
			if (i === undefined) { i = 0; }
			if (i < 0) { i += this.length; }
			if (i < 0) { i = 0; }
			for (var n = this.length; i < n; i++) {
				if (i in this && this[i] === find) { return i; }
			}
			return -1;
		};
	}

	window.eventable = function(obj) {
		var events = {};
		obj = obj || {};

		obj.on = function(name, fn) {
			events[name] = events[name] || [];
			events[name].push(fn);
			return obj;
		};

		obj.off = function(name, fn) {
			if(!events[name]) { return; }
			if (fn) {
				events[name].splice(events[name].indexOf(fn), 1);
			} else {
				events[name] = [];
			}
			return obj;
		};

		obj.trigger = function(name) {
			if(!events[name]) { return; }

			for(var i = 0; i < events[name].length; i++){
				events[name][i].apply(this, Array.prototype.slice.call(arguments, 1));
			}
			return obj;
		};

		return obj;
	};
}(window));
