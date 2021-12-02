const asyncHandler = require("express-async-handler");
const User = require("../models/User.model");
const { generateToken } = require("../Utils/generateToken");

const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    res.status(400);
    throw new Error("User already exists");
  }

  const userDb = await User.create({
    email: email,
    password: password,
  });

  if (userDb)
    res.status(201).json({
      _id: userDb._id,
      email: userDb.email,
      token: generateToken(userDb._id),
    });
  else {
    res.status(400);
    throw new Error("Error Occured");
  }
});
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    console.log('user ok')

    const token = generateToken(user._id)
    console.log(token)
    // setting token to cookie
    res.cookie("token", token, { maxAge: 300 * 1000, secure:true, sameSite: 'none' })
    
    
    res.json({
      _id: user._id,
      email: user.email,
      token: token
    });
  } else {
    res.status(400);
    throw new Error("invalid email or password");
  }
});

module.exports = { registerUser, authUser };
