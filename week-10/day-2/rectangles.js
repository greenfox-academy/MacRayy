'use strict';

// Create a constructor for creating Rectangles.
// it should take two parameters: the sides of the rectangle
// Every rectangle should have a method called getArea() that returns its area
// Every rectangle should have a method called getCircumference() that returns its circumference

function createRectangle(a, b) {
    function getArea() {
        let area = a * b;
        return area;
    }

    function getCircumference() {
        let circumference = 2 * a + 2 * b;
        return circumference;
    }

    return {
        getArea,
        getCircumference
    }
};

const brick = createRectangle(20, 40);
console.log(brick.getArea());
console.log(brick.getCircumference());
