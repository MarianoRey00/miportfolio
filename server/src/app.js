import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";

import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(
	fileUpload({
		useTempFiles: true,
		tempFileDir: "./src/upload",
	})
);
app.use(cookieParser());
app.use(
	cors({
		origin: "http://localhost:5173",
		// origin: "http://127.0.0.1:5173",
		credentials: true,
	})
);

app.use("/api", userRoutes);
app.use("/api", projectRoutes);

export default app;
