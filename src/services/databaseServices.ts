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

    if (!(dbHost || dbPass || dbUser)) {
      console.log("missing database credentials !");
      return false;
    }

    try {
      const conn: Connection = mysql.createConnection({
        host: dbHost,
        user: dbUser,
        password: dbPass,
        database: "crypto",
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
}

