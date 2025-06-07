import app from "./src/app.js";
import { connectDB } from "./src/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB();

const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
