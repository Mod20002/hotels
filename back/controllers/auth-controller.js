const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../models/db");

exports.register = async (req, res, next) => {
  const { firstName, lastName, email, phone, userName, password } = req.body;
  try {
    // validation
    if (!(firstName && lastName && email && phone && userName && password)) {
      return next(new Error("Fulfill all inputs"));
    }
   

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);
    const data = {
      firstName,
      lastName,
      email,
      phone,
      userName,
      password:hashedPassword
    };

    const rs = await db.user.create({ data });
    console.log(rs);

    res.json({ msg: "Register successful" });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  const { userName, password } = req.body;
  try {
    // validation
    if (!(userName.trim() && password.trim())) {
      throw new Error("username or password must not blank");
    }
    // find username in db.user
    const user = await db.user.findFirstOrThrow({ where: { userName } });
    // check password
    const pwOk = await bcrypt.compare(password, user.password);
    if (!pwOk) {
      throw new Error("invalid login");
    }
    // issue jwt token
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });
    console.log(token);
    res.json({ token: token });
  } catch (err) {
    next(err);
  }
};

exports.getme = (req, res, next) => {
  res.json(req.user);
};
