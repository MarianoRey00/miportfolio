import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import userRoutes from "./routes/user.routes.js";
import projectRoutes from "./routes/project.routes.js";
import appearanceRoutes from "./routes/appearance.routes.js";
import paymentRoutes from "./routes/payment.routes.js";

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
		origin: "https://miportfolio-one.vercel.app",
		credentials: true,
	})
);

app.use("/api", userRoutes);
app.use("/api", projectRoutes);
app.use("/api", appearanceRoutes);
app.use("/api", paymentRoutes);

export default app;
