interface UserResponse {
  name: string;
  age: number;
  occupation?: string;
  jobHistory?: {
    firstJob?: string;
  };
  favoriteFoods?: string[];
}

type UserPersonal = Pick<UserResponse, "name" | "age" | "occupation">;
type UserProfessional = Omit<UserResponse, "name" | "age">;

type UserY = string | number;
type UserX = UserPersonal & UserProfessional;

type Occupation = UserResponse["occupation"];
type RequiredOccupation = Exclude<Occupation, undefined>;

type RequiredUser = Required<UserResponse>;

function getPersonalUser(
  user: UserPersonal | UserProfessional
): UserPersonal | null {
  if (isPersonalUser(user)) {
    return user;
  } else {
    return null;
  }
}

function isPersonalUser(
  user: UserPersonal | UserProfessional
): user is UserPersonal {
  return "name" in user;
}

function assertPersonalUser(
  user: UserPersonal | UserProfessional
): asserts user is UserPersonal {
  if ("name" in user) {
    return;
  }
  throw new Error("Not personal user");
}
