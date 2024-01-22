// model for user registration

interface RegisterUser {
  username: String;
  password: String;
  email: String;
  name: String;
  description?: String;
}

export class UserRegistration implements RegisterUser {
  username: String;
  password: String;
  email: String;
  name: String;
  description?: String;

  constructor(
    username: String,
    password: String,
    email: String,
    name: String,
    description?: String
  ) {
    (this.username = username),
      (this.password = password),
      (this.email = email),
      (this.name = name),
      (this.description = description);
  }
}
