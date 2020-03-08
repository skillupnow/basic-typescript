const value: null | number | boolean | string | undefined = null;

const notNullValue = value ?? "nothing";

console.log("null coalescing", notNullValue, typeof notNullValue);
