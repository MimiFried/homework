(function () {
    'use strict';

    class Vehicle {
        constructor(color) {
            this.color = color;
        }

        go(speed) {
            this.speed = speed;
            console.log(`now going at ${this.speed}`);
        }
        print() {
            console.log(`color: ${this.color}  speed: ${this.speed}`);
        }
    }



    class Plane extends Vehicle {
        constructor() {
            super();
        }
        go(speed) {
            this.speed = speed;
            console.log(`now flying at ${this.speed}`);
        }
    }

    const myCar = new Vehicle('green');
    myCar.go(75);
    myCar.print();

    const myPlane = new Plane();
    myPlane.go(85);
    myPlane.print();
}());