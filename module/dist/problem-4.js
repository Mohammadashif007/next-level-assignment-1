"use strict";
{
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius;
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        throw new Error("Unknown shape");
    }
    const circle = { shape: "circle", radius: 5 };
    const rectangle = { shape: "rectangle", width: 5, height: 5 };
    console.log(calculateShapeArea(circle));
    console.log(calculateShapeArea(rectangle));
}
