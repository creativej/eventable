describe("simple event", function() {

	beforeEach(function() {
		SimpleEvent.clear();
	});

	it("should add event handler to a list", function() {
		expect(SimpleEvent.list.length).toEqual(0);

		SimpleEvent.on({}, "change", function(){ });

		expect(SimpleEvent.list.length).toEqual(1);
	});

	it("should remove event handler from a list", function() {
		var obj = {};

		SimpleEvent.on(obj, "change", function(){});

		SimpleEvent.off(obj, "change");

		expect(SimpleEvent.list.length).toEqual(0);
	});

	it("should trigger an event", function() {
		var obj = {
			changed: false,
			change: function(){
				SimpleEvent.trigger(this, 'change');
			}
		};

		expect(obj.changed).toEqual(false);

		SimpleEvent.on(obj, "change", function(){
			obj.changed = true;
		});

		obj.change();

		expect(obj.changed).toEqual(true);
	});
});
