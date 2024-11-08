{
    const getProperty = <T, Q extends keyof T>(obj: T, key: Q): T[Q] => {
        return obj[key];
    };

    const person = {
        name: "Alis",
        age: 45,
    };

    const result = getProperty(person, "name");
    console.log(result);
}
