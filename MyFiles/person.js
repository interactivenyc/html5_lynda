// http://paulirish.com/2011/requestanimationframe-for-smart-animating/
// http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating
// requestAnimationFrame polyfill by Erik Möller. fixes from Paul Irish and Tino Zijdel
// MIT license
(function (window) {
  Person.SPECIES = "human"
 
  function Person(name, age){
    this.name = name;
    this.age = age;
  };

  Person.prototype.sayHello = function(){
    console.log("Hello, my name is "+this.name);
  };

  window.Person = Person;

}(window));