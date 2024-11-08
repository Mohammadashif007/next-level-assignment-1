"use strict";
{
    const getProperty = (obj, key) => {
        return obj[key];
    };
    const person = {
        name: "Alis",
        age: 45,
    };
    const result = getProperty(person, "name");
    console.log(result);
}
