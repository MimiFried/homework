(function () {
    'use strict';

    function Vehicle(color) {
        this.color = color;
    }

    Vehicle.prototype.go = function(speed){ 
        this.speed = speed;
        console.log(`now going at speed ${speed}`);
    };

    function Plane(){
    }

    Plane.prototype = Object.create(Vehicle.prototype);
    Plane.prototype.go = function (speed) {
        this.speed = speed;
        console.log(`now flying at speed ${speed}`);
    };
     const myCar = new Vehicle('green');
     myCar.go(75);
     console.log(myCar);
     const myPlane = new Plane();
     myPlane.go(85);

     console.log(myPlane);
}());