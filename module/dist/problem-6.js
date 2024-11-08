"use strict";
{
    const updateProfile = (profile, update) => {
        return Object.assign(Object.assign({}, profile), update);
    };
    const profile = { name: "Alice", age: 25, email: "alice@example.com" };
    const result = updateProfile(profile, { age: 88 });
    console.log(result);
}
