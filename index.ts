enum Planet {
  Green = "Greenland",
  Blue = "Earth",
  Red = "Mars"
}

abstract class Animal {
  public species: string;
  constructor(species: string) {
    this.species = species;
  }

  public whatAmI(): string {
    return this.species;
  }

  public abstract speak(): string;
}

class Cat extends Animal {
  constructor() {
    super("cat");
  }

  public speak() {
    return "meow";
  }
}

class Dog extends Animal {
  constructor() {
    super("dog");
  }

  public speak() {
    return "woof";
  }
}

class Visitor {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

interface Zoo<Occupants> {
  occupants: Array<Occupants>;
}

type ZooOccupants = Animal | Visitor;

const ourZoo: Zoo<ZooOccupants> = {
  occupants: [new Cat(), new Dog(), new Visitor("Mike")]
};

function helloWorld(world: Planet, zoo: Zoo<ZooOccupants>): string {
  let output: string = `Hello, ${world}`;
  output = `${output}. Our zoo has ${zoo.occupants.length} occupants in it.`;
  return output;
}

console.log(helloWorld(Planet.Blue, ourZoo));
