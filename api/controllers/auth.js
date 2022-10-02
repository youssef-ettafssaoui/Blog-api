import { database } from "../database.js";
import bcrypt from "bcryptjs";

export const register = (req, res) => {
  // CHECK EXISTING USER :
  const qr = "SELECT * FROM users WHERE email = ? OR username = ?";

  database.query(qr, [req.body.email, req.body.username], (err, data) => {
    if (err) return res.json(err);
    if (data.length) return res.status(409).json("User already exists !");

    // HASH THE PASSWORD & CREATE AN USER :
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const qr = "INSERT INTO users (`username`, `email`, `password`) VALUES (?)";
    const values = [req.body.username, req.body.email, hash];
    database.query(qr, [values], (err, data) => {
      if (err) return res.json(err);
      return req.status(200).json("User has been created !");
    });
  });
};

export const login = (req, res) => {};

export const logout = (req, res) => {};
