import { React, useState } from "react";
import EditProfileModal from "./EditProfileModal";
import EditButton from "./EditButton";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import PulseLoader from "react-spinners/PulseLoader";

function ProfileData({ user, loading }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [id, setId] = useState(null);
	const [modalContent, setModalContent] = useState("");

	const openModal = (data, id) => {
		setModalContent(data);
		setId(id);
		setIsModalOpen(true);
	};

	return (
		<>
			<div className="w-full lg:w-full h-full lg:p-0">
				{loading ? (
					<div className="flex justify-center">
						<PulseLoader color="#ffffff" size={10} />
					</div>
				) : (
					<>
						<div className="flex flex-col gap-10 ">
							<div className="flex flex-col justify-center gap-4">
								<p className=" text-sm sm:text-base lg:text-lg font-medium">
									Foto de perfil
								</p>
								<div className="flex justify-between items-center">
									{user.picture?.url ? (
										<img
											src={user.picture?.url}
											alt=""
											className="h-20 w-20 md:w-24 md:h-24 rounded-lg object-cover"
										/>
									) : (
										<div className="h-20 w-20 rounded-full bg-neutral-800 flex items-center justify-center uppercase">
											{user.username[0]}
										</div>
									)}
									<div
										className="w-[14%] md:w-[10%] flex justify-center items-center py-3 bg-neutral-800 rounded-lg cursor-pointer relative group"
										onClick={() => openModal("foto de perfil", user.id)}
									>
										<EditButton width={16} height={16} stroke={"#FFF7ED"} />
									</div>
								</div>
							</div>

							<div className="flex flex-col gap-4">
								<p className="text-sm sm:text-base lg:text-lg font-medium">
									Nombre de usuario
								</p>
								<div className="flex justify-between">
									<p className="text-sm lg:text-base mt-2">{user.username}</p>
									<div
										className="w-[14%] md:w-[10%] flex justify-center items-center py-3 bg-neutral-800 rounded-lg cursor-pointer relative group"
										onClick={() => openModal("nombre de usuario", user.id)}
									>
										<EditButton width={16} height={16} stroke={"#FFF7ED"} />
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-sm sm:text-base lg:text-lg font-medium">
									Biografía
								</p>
								<div className="flex justify-between">
									{user.biography ? (
										<p className="break-all text-sm lg:text-base w-[80%]">
											{user.biography}
										</p>
									) : (
										<p>Sin biografia</p>
									)}
									<div
										className="w-[14%] h-[10%] md:w-[10%] flex justify-center items-center py-3 bg-neutral-800 rounded-lg cursor-pointer relative group"
										onClick={() => openModal("biografia", user.id)}
									>
										<EditButton width={16} height={16} stroke={"#FFF7ED"} />
									</div>
								</div>
							</div>
							<div className="flex flex-col gap-4">
								<p className="text-sm sm:text-base lg:text-lg font-medium">
									Redes sociales
								</p>
								<div className="flex justify-between">
									<div className="flex mt-2 gap-1">
										{Object.values(user.networks).every(
											(value) => value === ""
										) ? (
											<p>Sin redes sociales</p>
										) : (
											<>
												{user.networks?.instagram && (
													<FaInstagram className="w-6 h-6" />
												)}
												{user.networks?.tiktok && (
													<FaTiktok className="w-6 h-6" />
												)}
												{user.networks?.facebook && (
													<IoLogoFacebook className="w-6 h-6" />
												)}
												{user.networks?.x && (
													<FaSquareXTwitter className="w-6 h-6" />
												)}
												{user.networks?.youtube && (
													<FaYoutube className="w-6 h-6" />
												)}
												{user.networks?.linkedin && (
													<FaLinkedin className="w-6 h-6" />
												)}
												{user.networks?.spotify && (
													<BsSpotify className="w-6 h-6" />
												)}
												{user.networks?.pinterest && (
													<FaPinterest className="w-6 h-6" />
												)}
												{user.networks?.github && (
													<IoLogoGithub className="w-6 h-6" />
												)}
											</>
										)}
									</div>
									<div
										className="w-[14%] md:w-[10%] flex justify-center items-center py-3 bg-neutral-800 rounded-lg cursor-pointer relative group"
										onClick={() => openModal("redes sociales", user.id)}
									>
										<EditButton width={16} height={16} stroke={"#FFF7ED"} />
									</div>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			<EditProfileModal
				user={user}
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				data={modalContent}
				id={id}
			/>
		</>
	);
}

export default ProfileData;
