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

  public feed() {
    return `${this.speak()} I am full`;
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

interface Person {
  name: string;
  visit: (animal: Animal) => void;
}

interface AnimalFeeder {
  feeds(animal: Animal): void;
}

class Visitor implements Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  public visit(animal: Animal) {
    return animal.speak();
  }
}

class Staff implements Person, AnimalFeeder {
  name: string;
  constructor(name: string) {
    this.name = name;
  }

  public feeds(animal: Animal) {
    return animal.feed();
  }

  public visit(animal: Animal) {
    console.log(animal.speak());
  }
}

interface Zoo<Occupants> {
  occupants: Array<Occupants>;
}

type ZooOccupants = Animal | Visitor | Staff;

const ourZoo: Zoo<ZooOccupants> = {
  occupants: [
    new Cat(),
    new Dog(),
    new Visitor("Mike"),
    new Staff("Zoo Keeper")
  ]
};

function isAnimal(occupant: ZooOccupants): occupant is Animal {
  return "speak" in occupant;
}
function isStaff(occupant: ZooOccupants): occupant is Staff {
  return "feeds" in occupant;
}

function helloWorld(world: Planet, zoo: Zoo<ZooOccupants>): string {
  let output: string = `Hello, ${world}`;
  output = `${output}. Our zoo has ${zoo.occupants.length} occupants in it.`;
  for (const occupant of zoo.occupants) {
    if (isAnimal(occupant)) {
      console.log(occupant.speak());
    }
    if (!isAnimal(occupant)) {
      const firstAnimal = zoo.occupants[0];
      if (isAnimal(firstAnimal)) {
        if (isStaff(occupant)) {
          console.log("Feed", occupant.feeds(firstAnimal));
        } else {
          console.log("Visit", occupant.visit(firstAnimal));
        }
      }
    }
  }
  return output;
}

console.log(helloWorld(Planet.Blue, ourZoo));
