import mysql from "mysql";

export const database = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "root",
  port: 8889,
  database: "blog",
});
