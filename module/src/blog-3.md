# What is type guard?

Type guard is a process to help compiler to understand the specific type of a variable at runtime.

Type guard is necessary in TypeScript for safely narrowing down types at runtime. Type guards allowing compiler to understand and handle different possible types more accurately.

TypeScript use build-in JS operators like `` `instanceof` ``, `` `typeof` `` and `` `in` `` to determine if an object contain a property.
Type guards enable us to instruct the typescript compiler to infer a specific type for a variable in a particular context.

## Why type guards are necessary?

1. Safe Type Narrowing: In TypeScript we often work with union types or types that can vary.

2. Compile-time Safety: Type guards help TypeScript's compiler to understand your code batter, which prevent errors at compile time.

3. Improving Readability and Maintainability: Explicitly checking types easer to understand the code and maintain.

## Type of Type guard

-   useful for primitive type such as number, string, boolean and symbol.

```
function checkInput(input: string | number){
  if(typeof input === "string" ){
      console.log("input is string");
  }
  else if(typeof input === "number"){
      console.log("input is number");
  }
}
```

## instanceof Type guard

-   useful for check an object is a instance of a particular class.

```
class Animal {
  sound() {
      console.log("animal sound");
  }
}

class Dog extends Animal {
  bark() {
      console.log("Dog sound");
  }
}

const pet = new Dog();

if (pet instanceof Dog) {
  pet.bark();
}

if (pet instanceof Animal) {
  pet.sound();
}

```

## in Type guard

-   It's check an object has specific property.

```
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
if ("swim" in animal) {
  animal.swim();
} else {
  animal.fly();
}
}
```

