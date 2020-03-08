interface UserResponse {
  name: string;
  age: number;
  occupation?: string;
  jobHistory?: {
    firstJob?: string;
  };
  favoriteFoods?: string[];
}

function askTom() {
  const user: UserResponse = {
    name: "Tom",
    age: 67,
    occupation: "Code Monkey",
    favoriteFoods: ["pizza", "bugres"]
  };
  console.log(
    `${user.name} is ${user.age} years old, and he is a ${user.occupation}`
  );
  const firstJob = user.jobHistory?.firstJob;
  const tomsFoods = user.favoriteFoods?.[0];
  console.log(tomsFoods);
  if (firstJob) {
    console.log("Tom's firstJob was: ", firstJob);
  } else {
    console.log("Tom struggled to find work");
  }
}

askTom();
