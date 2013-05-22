Eventable
==

A simple lightweight event object for javascript that does not tie in with the DOM.

Basic usage:
--
```javascript
var obj = eventable();

obj.on('update', function() {
  console.log('update event triggered');
});

obj.trigger('update'); // logs: update event triggerred
```

You could pass an existing object as well.

```javascript
var model = eventable({});

obj.on('update', function() {
  console.log('update event triggered');
});

obj.trigger('update'); // logs: update event triggerred
```

You can remove events

```javascript
obj.off('update');
obj.trigger('update'); //Does nothing
```
