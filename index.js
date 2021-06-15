// Add your Circle class here

class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    get diameter() {
        return this.radius * 2
    }

    set diameter(diameter) {
        this.radius = diameter / 2;

    }

    get circumference() {
       return (Math.PI) * (this.radius * 2);
    }

    set circumference(circumference) {
        this.radius = circumference / ((Math.PI) * 2);
    }

    get area() {
       return Math.PI * ((this.radius) * (this.radius))
    }

    set area(area) {

    }
}


// Use Math.PI to get an accurate measurement of pi  (π)

// Define getter methods for diameter, circumference, and area which will calculate each value using this.radius and pi

// Define setter methods for diameter, circumference, and area which will accept values for each calculation, calculate the radius based on the input value and set this.radius accordingly