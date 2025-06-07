import { React, useState, useEffect } from "react";
import { useUsers } from "../context/UserContext";
import EditNetworks from "./EditNetworks";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlashLight } from "react-icons/pi";
import PulseLoader from "react-spinners/PulseLoader";
import toast from "react-hot-toast";
import Input from "../components/Input";
import InputFile from "../components/InputFile";

function EditProfileModal({ user, isOpen, onClose, data }) {
	if (!isOpen) return null;

	const [formName, setFormName] = useState(data);
	const {
		editUser,
		editUserPicture,
		editUserPassword,
		errors,
		setErrors,
		userSaveLoading,
	} = useUsers();
	const [viewActualPassword, setViewActualPassword] = useState(false);
	const [viewNewPassword, setViewNewPassword] = useState(false);
	const [maxLength, setMaxLength] = useState(80);
	const [usernameMaxLength, setUsernameMaxLength] = useState(20);
	const [prevProfilePicture, setPrevProfilePicture] = useState(user.picture);

	useEffect(() => {
		setErrors([]);
	}, []);

	const [newUser, setNewUser] = useState({
		id: user._id,
		username: user.username,
		email: user.email,
		biography: user.biography,
		picture: user.picture,
		networks: user.networks,
		actualPassword: "",
		newPassword: "",
	});

	function handleChange(e) {
		const { name, value, files } = e.target;

		if (name === "picture") {
			setNewUser({ ...newUser, picture: files[0] });
		} else {
			setNewUser({ ...newUser, [name]: value });
		}
	}

	function handleNetworksChange(e) {
		const { name, value } = e.target;
		setNewUser((prevUser) => ({
			...prevUser,
			networks: {
				...prevUser.networks,
				[name]: value,
			},
		}));
	}

	function handleSubmitForm(e) {
		e.preventDefault();
		if (formName === "foto de perfil") {
			handleSubmitPicture();
		} else if (formName === "contraseña") {
			handleSubmitPassword();
		} else {
			handleSubmit();
		}
	}

	async function handleSubmitPicture() {
		try {
			const success = await editUserPicture(newUser.id, newUser);
			if (success) {
				toast.success("¡Foto de perfil actualizada con exito!");
				onClose(true);
			}
		} catch (error) {}
	}

	async function handleSubmitPassword() {
		try {
			const success = await editUserPassword(newUser.id, newUser);
			if (success) {
				toast.success("¡Contraseña actualizada con exito!");
				onClose(true);
			}
		} catch (error) {}
	}

	async function handleSubmit() {
		try {
			const success = await editUser(newUser.id, newUser);
			if (success) {
				toast.success("¡Usuario actualizado con exito!");
				onClose(true);
			}
		} catch (error) {}
	}

	const toggleViewActualPassword = (value) => {
		setViewActualPassword(value);
	};

	const toggleViewNewPassword = (value) => {
		setViewNewPassword(value);
	};

	return (
		<>
			<div
				className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black z-50"
				onClick={onClose}
			>
				<div
					className="relative bg-orange-50 p-6 sm:p-10 rounded-lg w-[95%] xs:w-[80%] sm:w-[75%] md:w-[65%] lg:w-[50%] shadow-lg h-[485px]"
					onClick={(e) => e.stopPropagation()}
				>
					<button
						onClick={onClose}
						className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-lg"
					>
						X
					</button>
					<h2 className="text-xl text-center">Editar {formName}</h2>
					<form
						className="flex flex-col gap-4 justify-between h-96"
						onSubmit={handleSubmitForm}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSubmitForm();
							}
						}}
					>
						{formName === "foto de perfil" && (
							<div className="flex flex-col mt-10 gap-4 ">
								<label htmlFor="foto de perfil">Foto de perfil</label>
								<InputFile
									id="foto de perfil"
									name="picture"
									onChange={handleChange}
									errors={errors}
								/>
								{user.picture.url && (
									<>
										<p>Foto previa:</p>
										<img
											src={prevProfilePicture?.url}
											className="h-20 w-20 rounded-lg  object-cover"
											alt=""
										/>
									</>
								)}
							</div>
						)}
						{formName === "nombre de usuario" && (
							<div className="flex flex-col mt-10 gap-2">
								<label htmlFor="username">Nombre de usuario *</label>
								<p
									className={`text-sm ml-auto ${
										newUser.username.length > usernameMaxLength
											? "text-red-600"
											: "text-neutral-900"
									}`}
								>
									{newUser.username.length}/{usernameMaxLength}
								</p>
								<Input
									type="text"
									id="username"
									name="username"
									onChange={handleChange}
									placeholder="Nombre de usuario"
									value={newUser.username}
									errors={errors}
								/>
							</div>
						)}
						{formName === "biografia" && (
							<div className="flex flex-col mt-10">
								<label htmlFor="biografia">Biografia</label>
								<p
									className={`text-sm ml-auto ${
										newUser.biography.length > maxLength
											? "text-red-600"
											: "text-neutral-900"
									}`}
								>
									{newUser.biography.length}/{maxLength}
								</p>
								<textarea
									name="biography"
									id="biografia"
									onChange={handleChange}
									className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl resize-none"
									rows={5}
								>
									{newUser.biography}
								</textarea>
								<p className="text-red-600">
									{
										errors?.find((error) => error.field === "biography")
											?.message
									}
								</p>
							</div>
						)}
						{formName === "redes sociales" && (
							<EditNetworks
								handleNetworksChange={handleNetworksChange}
								newUser={newUser}
							/>
						)}
						{formName === "email" && (
							<div className="flex flex-col mt-10">
								<label htmlFor="email">Email *</label>

								<Input
									type="email"
									id="email"
									name="email"
									placeholder="Email"
									value={newUser.email}
									onChange={handleChange}
									errors={errors}
								/>
							</div>
						)}
						{formName === "contraseña" && (
							<div className="flex flex-col mt-10 gap-4">
								<div className="flex flex-col">
									<label htmlFor="contraseña actual">Contraseña actual *</label>
									<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex">
										<input
											type={viewActualPassword ? "text" : "password"}
											id="contraseña actual"
											name="actualPassword"
											className="text-zinc-900 w-full bg-orange-50 focus:outline-none placeholder-customColor-blue"
											onChange={handleChange}
										/>
										{viewActualPassword === false ? (
											<PiEyeLight
												className="text-black text-2xl cursor-pointer"
												onClick={() => toggleViewActualPassword(true)}
											/>
										) : (
											<PiEyeSlashLight
												className="text-black text-2xl cursor-pointer"
												onClick={() => toggleViewActualPassword(false)}
											/>
										)}
									</div>
									<p className="text-red-600">
										{
											errors?.find((error) => error.field === "actualPassword")
												?.message
										}
									</p>
								</div>
								<div className="flex flex-col">
									<label htmlFor="nueva contraseña">Nueva contraseña *</label>
									<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex">
										<input
											type={viewNewPassword ? "text" : "password"}
											id="nueva contraseña"
											name="newPassword"
											className="text-zinc-900 w-full bg-orange-50 focus:outline-none placeholder-customColor-blue"
											onChange={handleChange}
										/>
										{viewNewPassword === false ? (
											<PiEyeLight
												className="text-black text-2xl cursor-pointer"
												onClick={() => toggleViewNewPassword(true)}
											/>
										) : (
											<PiEyeSlashLight
												className="text-black text-2xl cursor-pointer"
												onClick={() => toggleViewNewPassword(false)}
											/>
										)}
									</div>
									<p className="text-red-600">
										{
											errors?.find((error) => error.field === "newPassword")
												?.message
										}
									</p>
								</div>
							</div>
						)}
						<button
							className="text-orange-50 px-3 py-2 bg-neutral-900 rounded-xl hover:bg-neutral-800"
							type="submit"
							disabled={userSaveLoading}
						>
							{userSaveLoading ? (
								<PulseLoader color="#ffffff" size={7} />
							) : (
								"Guardar cambios"
							)}
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default EditProfileModal;
