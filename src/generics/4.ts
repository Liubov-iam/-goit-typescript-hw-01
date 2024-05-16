type UserModel = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

function createOrUpdateUser<T extends Partial<UserModel>>(initialValues: T): UserModel {
  const defaultUser: UserModel = {
    name: "",
    surname: "",
    email: "",
    password: "",
  };

  const updatedUser: UserModel = { ...defaultUser, ...initialValues };

  return updatedUser;
}

const updatedUserData = createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});

console.log(updatedUserData);