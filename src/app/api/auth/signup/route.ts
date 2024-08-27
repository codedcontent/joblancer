import dbConnect from "@/lib/db";
import User, { IUser } from "@/models/User";
import bcrypt from "bcryptjs";

// POST handler
export async function POST(req: Request) {
  // Connect to the database
  await dbConnect();

  const { email, password, firstName, lastName } = await req.json();

  // Ensure email and password present
  if (!email || !password)
    return Response.json(
      {
        error: "Email or Password not provided",
      },
      { status: 400 }
    );

  // Ensure user is new
  const existingUser = await User.findOne({ email });
  if (existingUser)
    return Response.json(
      { error: "A user with this email already exist" },
      { status: 403 }
    );

  // Hash password and save new user
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user: IUser = new User({ email, password: hash, firstName, lastName });
  const savedUser = await user.save();

  if (!savedUser._id)
    return Response.json(
      { error: "Error creating account, try again later" },
      { status: 500 }
    );

  return Response.json({
    msg: "Account created",
  });
}
