;(function(e,t,n){function i(n,s){if(!t[n]){if(!e[n]){var o=typeof require=="function"&&require;if(!s&&o)return o(n,!0);if(r)return r(n,!0);throw new Error("Cannot find module '"+n+"'")}var u=t[n]={exports:{}};e[n][0](function(t){var r=e[n][1][t];return i(r?r:t)},u,u.exports)}return t[n].exports}var r=typeof require=="function"&&require;for(var s=0;s<n.length;s++)i(n[s]);return i})({1:[function(require,module,exports){
(function() {
  var Adder;

  module.exports = Adder = (function() {
    function Adder() {}

    Adder.prototype.add = function(a, b) {
      return a + b;
    };

    return Adder;

  })();

}).call(this);


},{}],2:[function(require,module,exports){
(function() {
  var Adder;

  Adder = require('./adder.coffee');

  console.log("Adding 2 to 3 gets us " + (new Adder().add(2, 3)));

}).call(this);


},{"./adder.coffee":1}]},{},[1,2])
//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyIvVXNlcnMvam9oYW4vZGV2ZWxvcC9qcy9ydHN0L3NyYy9hZGRlci5jb2ZmZWUiLCIvVXNlcnMvam9oYW4vZGV2ZWxvcC9qcy9ydHN0L3NyYy9tYWluLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBO0NBQUEsSUFBQSxDQUFBOztDQUFBLENBQUEsQ0FBdUIsR0FBakIsQ0FBTjtDQUNDOztDQUFBLENBQVMsQ0FBVCxNQUFNO0NBQVMsRUFBSSxVQUFKO0NBQWYsSUFBSzs7Q0FBTDs7Q0FERDtDQUFBOzs7OztBQ0FBO0NBQUEsSUFBQSxDQUFBOztDQUFBLENBQUEsQ0FBUSxFQUFSLEVBQVEsU0FBQTs7Q0FBUixDQUVBLENBQUEsQ0FBd0MsQ0FBQSxFQUFqQyxpQkFBTTtDQUZiIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBBZGRlclxuXHRhZGQ6IChhLCBiKSAtPiBhICsgYiIsIkFkZGVyID0gcmVxdWlyZSAnLi9hZGRlci5jb2ZmZWUnXG5cbmNvbnNvbGUubG9nIFwiQWRkaW5nIDIgdG8gMyBnZXRzIHVzICN7bmV3IEFkZGVyKCkuYWRkKDIsMyl9XCIiXX0=
;