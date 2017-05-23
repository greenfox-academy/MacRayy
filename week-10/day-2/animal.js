'use strict';

// Create a constructor for creating Animals.
// it should take one parameter: what the animal says
// Every animal should have a method called say() that prints what the animal says

const Animal = function(sound) {
    this.sound = sound;
};

Animal.prototype.say = function() {
    console.log(this.sound);
};

const dog = new Animal('woof');

dog.say();

const wolf = new Animal('howl');

wolf.say();


class Bird {
    constructor(sound) {
        this.sound = sound;
    }
}

Bird.prototype.say = function() {
    console.log(this.sound);
};

const owl = new Bird('hooo');
owl.say()
