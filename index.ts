enum Planet {
  Green = "Greenland",
  Blue = "Earth",
  Red = "Mars"
}

class Animal {
  public species: string;
  constructor() {
    this.species = "cat";
  }
}

interface Zoo {
  animals: Array<Animal>;
}

const ourZoo: Zoo = {
  animals: [new Animal()]
};

function helloWorld(world: Planet, zoo: Zoo): string {
  let output: string = `Hello, ${world}`;
  output = `${output}. Our zoo has ${zoo.animals.length} animals in it.`;
  return output;
}

console.log(helloWorld(Planet.Blue, ourZoo));
