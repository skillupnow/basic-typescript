enum Planet {
  Green = "Greenland",
  Blue = "Earth",
  Red = "Mars"
}

function helloWorld(world: Planet, verbose?: boolean): string {
  let output: string = `Hello, ${world}`;
  if (verbose) {
    output = `Hello, fellows from planet ${world}.`;
  }
  return output;
}

console.log(helloWorld(Planet.Blue));
