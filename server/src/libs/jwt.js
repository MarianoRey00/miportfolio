import jwt from "jsonwebtoken";

export function createAccessToken(payload) {
	return new Promise((resolve, reject) => {
		jwt.sign(
			payload,
			"1ad4a35d73",
			// process.env.JWT_SECRET_KEY,
			{
				expiresIn: "1d",
			},
			(err, token) => {
				if (err) reject(err);
				resolve(token);
			}
		);
	});
}
