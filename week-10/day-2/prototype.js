'use strict'

function Car() {
    this.km = 300;
}

Car.prototype.color = 'red';

var audi = new Car;
console.log(audi.color);

function CarFactory() {
    var car = {};
    car.km = 200;
    return car;
}

var trabant = CarFactory();
console.log(trabant.km);
//this nelkul lehet objektumokat letrehozni

function Student() {
    this.firstN = 'feri';
    this.lastN = 'ajtozarasi'
}

Student.prototype.greet = function() {
    console.log(this.firstN, this.lastN);
}

var feri = new Student();
feri.greet();
//ez nagyon altalanos

class Person {
    constructor() {
        this.firstN = 'fero';
        this.lastN = 'ajtozaraso';
    }

    greet() {
        console.log(this.firstN, this.lastN);
    }
}

var fero = new Person();
fero.greet();
// ma ezt hasznaljak sokan

//factory pattern
function createStudent() {
    var firstName = 'sanyi';
    var lastName = 'kovacs';

    function greet() {
        console.log(firstName, lastName);
    }

    function setFirstName(fn) {
        firstName = fn;
    }

    function getFirstName() {
        return firstName;
    }

    return {
        greet,
        setFirstName,
        getFirstName
    };
}

var sanyi = createStudent();
sanyi.greet();
//ez closure-t hasznal
sanyi.setFirstName('sandor');
sanyi.getFirstName();
sanyi.greet();
