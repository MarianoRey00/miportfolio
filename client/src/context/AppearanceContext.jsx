import { useState, useEffect, createContext, useContext } from "react";
import {
	getAppearanceRequest,
	editAppearanceRequest,
	getPublicAppearanceRequest,
} from "../api/appearance.js";
import { useAuth } from "../context/AuthContext.jsx";

const AppearanceContext = createContext();

export const useAppearance = () => {
	const context = useContext(AppearanceContext);
	return context;
};

export const AppearanceProvider = ({ children }) => {
	const { authUser } = useAuth();
	const [appearanceLoading, setAppearanceLoading] = useState(false);
	const [appearance, setAppearance] = useState({
		pictureShape: "",
		backgroundColor: "",
		textColor: "",
		projectBackgroundColor: "",
		projectShape: "",
		projectPictureShape: "",
		projectTextColor: "",
		projectBorder: "",
		projectBorderColor: "",
	});

	const getAppearance = async () => {
		try {
			setAppearanceLoading(true);
			const res = await getAppearanceRequest();
			setAppearance(res.data);
		} catch (error) {
			console.log(error);
		} finally {
			setAppearanceLoading(false);
		}
	};

	useEffect(() => {
		(async () => {
			if (authUser) {
				await getAppearance();
			}
		})();
	}, [authUser]);

	const getPublicAppearance = async (id) => {
		const res = await getPublicAppearanceRequest(id);
		return res.data;
	};

	const editAppearance = async (appearance) => {
		const res = await editAppearanceRequest(appearance);
		setAppearance(res.data);
	};

	return (
		<AppearanceContext.Provider
			value={{
				appearance,
				getAppearance,
				getPublicAppearance,
				editAppearance,
				appearanceLoading,
			}}
		>
			{children}
		</AppearanceContext.Provider>
	);
};
