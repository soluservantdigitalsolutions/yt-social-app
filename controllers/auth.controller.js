import { loginUser, registerUser } from "../services/auth.service.js";
import { deleteUser } from "../services/user.service.js";

//Register
export const register = async (req, res) => {
  try {
    const newUser = await registerUser(req.body);

    const { password, ...data } = newUser._doc;
    res.status(200).json({
      data,
      message: "User has been registered successfully",
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occurred Registering User",
    });
    console.log(error);
  }
};

export const login = async (req, res) => {
  try {
    const user = await loginUser(req.body, res);
    const { password, ...data } = user._doc;

    res.status(200).json({
      message: "User logged In successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      error: error,
      message: "Error Occurred logging in the User",
    });
    console.log(error);
  }
};
