'use strict'
// Create an Animal constructor
// Every animal has a hunger value, which is a number
// Every animal has a thirst value, which is a number
// when creating a new animal object these values are created with the default 50 value
// Every animal can eat() which decreases their hunger by one
// Every animal can drink() which decreases their thirst by one
// Every animal can play() which increases both by one
//
// Create a Farm constructor
// Every farm has list of Animals
// Every farm has slots which defines the number of free places for animals
// Every farm can breed() which creates a new animal if there's place for it
// Every farm can slaughter() which removes the least hungry animal

function animal() {
    this.hunger = 50,
    this.thirst = 50,

    this.eat = function() {
        this.hunger--
    },

    this.drink = function() {
        this.thirst--
    },

    this.play = function() {
        this.drink++,
        this.hunger++
    }
}

function farm() {
    this.animals = [],
    this.freePlaces = 4,

    this.breed = function() {
        if (this.freePlaces > 0 && this.freePlaces < 5) {
            var newAnimal = new animal();
            this.animals.push(newAnimal);
            this.freePlaces--;
        }
    },

    this.slaughter = function() {
        this.animals.sort(function (a, b) {
            return a.hunger - b.hunger;
        })
        this.animals.shift();
    }
}

let animalFarm = new farm();
animalFarm.breed();
animalFarm.breed();
animalFarm.breed();
animalFarm.animals[1].eat();
animalFarm.animals[1].eat();
animalFarm.animals[1].eat();
animalFarm.slaughter();
