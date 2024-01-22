interface UserLogin {
  username: String;
  password: String;
}

export class LoginData implements UserLogin {
  username: String;
  password: String;

  constructor(username: String, password: String) {
    (this.username = username), (this.password = password);
  }
}
