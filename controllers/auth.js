const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET } = process.env;
const User = require("../models/user");

exports.register = async (req, res) => {
  try {
    //* Getting Data from the BODY
    const { name, email, password, confirmPassword } = req.body;

    // * Checking if any Data is Missing from the BODY
    if (!name || !email || !password || !confirmPassword) {
      return res.json({
        success: false,
        error: "All Fields Are Required",
      });
    }

    // * Checking if Password and Confirm Password are Not Same
    if (password != confirmPassword) {
      return res.json({
        success: false,
        error: "Password and Confirm Password Does not Match",
      });
    }

    const existingUserE = await User.findOne({ email: email });

    // ! Checking if the user already exists
    if (existingUserE) {
      return res.json({
        success: false,
        error: "User Already Exists",
      });
    }
    const myEncryPassword = await bcrypt.hash(password, 10);

    // ! Creating User in DB
    let user = await User.create({
      name,
      email: email.toLowerCase(),
      password: myEncryPassword,
      tags: ["Education", "Bills", "ID"]
    });
    console.log(user);

    const token = jwt.sign(
      {
        user_id: user.uid,
        email: user.email,
      },
      SECRET,
      {
        expiresIn: "24h",
      }
    );
    return res.status(200).json({
      success: true,
      token,
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({
        success: false,
        error: "Field is Missing",
      });
    }
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        {
          user_id: user.uid,
          email: user.email,
        },
        SECRET,
        {
          expiresIn: "24h",
        }
      );

      return res.status(200).json({
        success: true,
        token,
        user,
      });
    } else {
      return res.json({
        success: false,
        error: "User Id or Password is incorrect",
      });
    }
  } catch (error) {
    console.log(error.message);
    return res.json({
      success: false,
      error: error.message,
    });
  }
};
