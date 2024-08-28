import dbConnect from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  // Connect to the database
  await dbConnect();

  // Ensure email and password present
  if (!email || !password)
    return Response.json(
      {
        error: "Email or Password not provided",
      },
      { status: 400 }
    );

  // Ensure user email exists
  const user = await User.findOne({ email });

  if (!user)
    return Response.json(
      { error: "A user with this email does not exist" },
      { status: 400 }
    );

  // Get user hashed password
  const hashedPassword = user.password;

  // Validate user
  const passwordMatch = await bcrypt.compare(password, hashedPassword);
  if (!passwordMatch)
    return Response.json(
      { error: "Email or password incorrect" },
      { status: 400 }
    );

  // Login the user
  return Response.json(
    {
      msg: "Login success",
      accessToken: "Some accessToken",
      refreshToken: "Some refreshToken",
    },
    { status: 201 }
  );
}
