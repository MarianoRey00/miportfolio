import { useState } from "react";
import { useUsers } from "../context/UserContext";
import { useAppearance } from "../context/AppearanceContext";
import { useProjects } from "../context/ProjectContext.jsx";
import { Link } from "react-router-dom";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import PulseLoader from "react-spinners/PulseLoader";

function PreviewModal({ isOpen, onClose }) {
	if (!isOpen) return null;
	const { user } = useUsers();
	const { appearance, appearanceLoading } = useAppearance();
	const { projects } = useProjects();

	const publicProjects = projects.filter((project) => project.public);

	return (
		<>
			{appearanceLoading ? (
				<div className="absolute inset-0 flex justify-center items-center bg-neutral-900">
					<PulseLoader color="#ffffff" size={12} />
					<button
						className="border border-orange-50 bg-neutral-900 text-orange-50 fixed bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 md:px-5 md:py-3 rounded-full shadow-lg z-100"
						onClick={onClose}
					>
						X
					</button>
				</div>
			) : (
				<div
					className="fixed inset-0 z-50 overflow-auto py-10 flex justify-center min-h-screen pb-10 lg:hidden"
					style={{ backgroundColor: appearance.backgroundColor }}
				>
					<div className="flex flex-col items-center gap-6 w-[90%] ">
						<div className="flex justify-center">
							{user?.picture.url ? (
								<img
									src={user?.picture.url}
									className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 object-cover"
									style={{ borderRadius: appearance.pictureShape }}
								/>
							) : (
								<div
									className="w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28 bg-neutral-800 flex items-center justify-center"
									style={{ borderRadius: appearance.pictureShape }}
								>
									<p className="p-6 font-sans text-2xl uppercase">
										{user?.username[0]}
									</p>
								</div>
							)}
						</div>
						<div
							className="flex flex-col gap-3 text-center items-center w-[80%] sm:w-[70%] md:w-[50%]"
							style={{ color: appearance.textColor }}
						>
							<h1 className="text-xl md:text-2xl break-all">
								{user?.username}
							</h1>
							<p className="text-sm md:text-lg break-all">{user?.biography}</p>
							<div className="flex gap-2 sm:gap-3 flex-wrap justify-center">
								{user?.networks?.instagram && (
									<Link
										to={`https://instagram.com/${user.networks.instagram}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaInstagram className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.tiktok && (
									<Link
										to={`https://tiktok.com/@${user.networks.tiktok}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaTiktok className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.facebook && (
									<Link
										to={`https://facebook.com/${user.networks.facebook}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<IoLogoFacebook className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.x && (
									<Link
										to={`https://x.com/${user.networks.x}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaSquareXTwitter className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.youtube && (
									<Link
										to={`https://youtube.com/${user.networks.youtube}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaYoutube className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.linkedin && (
									<Link
										to={`https://linkedin.com/${user.networks.linkedin}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaLinkedin className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.spotify && (
									<Link
										to={`https://spotify.com/${user.networks.spotify}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<BsSpotify className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.pinterest && (
									<Link
										to={`https://pinterest.com/${user.networks.pinterest}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<FaPinterest className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
								{user?.networks?.github && (
									<Link
										to={`https://github.com/${user.networks.github}`}
										target="_blank"
										rel="noopener noreferrer"
									>
										<IoLogoGithub className="w-6 h-6 sm:w-7 sm:h-7 hover:scale-110" />
									</Link>
								)}
							</div>
						</div>

						<div className="flex flex-col gap-4 w-full sm:w-[90%] md:w-[80%]">
							{publicProjects?.map((project) => (
								<div key={project._id}>
									<div
										className="flex p-4 xs:p-5 sm:p-6 md:p-7 overflow-hidden w-full"
										style={{
											backgroundColor: appearance.projectBackgroundColor,
											borderRadius: appearance.projectShape,
											border: appearance.projectBorder,
											borderColor: appearance.projectBorderColor,
										}}
									>
										<div className="w-[28%] xxs:w-[20%] xs:w-20 sm:w-24 md:w-28">
											<img
												className="w-16 h-16 xs:w-20 xs:h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover"
												style={{
													borderRadius: appearance.projectPictureShape,
												}}
												src={project.image.url}
												alt=""
											/>
										</div>
										<div
											className="ml-2 xs:ml-4 lg:ml-10 flex items-center w-[73%] xxs:w[80%]"
											style={{ color: appearance.projectTextColor }}
										>
											<h2 className="text-sm xs:text-base md:text-lg break-words line-clamp-3">
												{project.title}
											</h2>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
					<button
						className="border border-orange-50 bg-neutral-900 text-orange-50 fixed bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 md:px-5 md:py-3 rounded-full shadow-lg z-100"
						onClick={onClose}
					>
						X
					</button>
				</div>
			)}
		</>
	);
}

export default PreviewModal;
