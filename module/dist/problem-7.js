"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            const currentAge = currentYear - this.year;
            console.log(currentAge);
        }
    }
    const carInfo = new Car("Honda", "Civic", 2020);
    carInfo.getCarAge();
}