import mysql, { Connection } from "mysql";

export default class DatabaseServices {
  private static connection: Connection | null = null;

  //  getter for connection instance
  static getConnection(): Connection {
    return DatabaseServices.connection;
  }

  // destroy connection
  static destroyConnection(): void {
    DatabaseServices.connection.destroy();
  }

  establishConnection(): boolean {
    const dbHost: string | undefined = process.env.DB_HOST;
    const dbUser: string | undefined = process.env.DB_USER;
    const dbPass: string | undefined = process.env.DB_PASSWORD;
    const dbName: string | undefined = process.env.DB_NAME;

    if (!(dbHost || dbPass || dbUser)) {
      console.log("missing database credentials !");
      return false;
    }

    try {
      const conn: Connection = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPass,
        database: dbName,
      });

      conn.connect((err) => {
        if (!err) {
          console.log("connection established !");
          DatabaseServices.connection = conn;
        } else {
          throw err;
        }
      });

      return true;
    } catch (err) {
      console.log("failed to connect ");
      return false;
    }
  }

  // search user
  searchUser(username: string): Promise<boolean> {
    const database: string = process.env.DB_NAME;
    const query: string = `select * from ${database} where username == ${username}`;

    return new Promise((resolve, reject) => {});
  }
}
