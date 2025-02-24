import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import { FaPinterest } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";

function EditNetworks({ handleNetworksChange, newUser }) {
	return (
		<>
			<div className="flex flex-col gap-4 overflow-auto scrollbar py-1">
				<div className="flex flex-col">
					<label htmlFor="instagram">Instagram</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<FaInstagram className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="instagram"
							placeholder="Usuario de Instagram"
							onChange={handleNetworksChange}
							value={newUser.networks?.instagram}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="tiktok">Tiktok</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<FaTiktok className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="tiktok"
							placeholder="Usuario de Tiktok"
							onChange={handleNetworksChange}
							value={newUser.networks?.tiktok}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="facebook">Facebook</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<IoLogoFacebook className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="facebook"
							placeholder="Usuario de Facebook"
							onChange={handleNetworksChange}
							value={newUser.networks?.facebook}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="x">X (Twitter)</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<FaSquareXTwitter className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="x"
							placeholder="Usuario de X"
							onChange={handleNetworksChange}
							value={newUser.networks?.x}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="youtube">Youtube</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<FaYoutube className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="youtube"
							placeholder="Usuario de Youtube"
							onChange={handleNetworksChange}
							value={newUser.networks?.youtube}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="linkedin">Linkedin</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<FaLinkedin className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="linkedin"
							placeholder="Usuario de Linkedin"
							onChange={handleNetworksChange}
							value={newUser.networks?.linkedin}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="spotify">Spotify</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<BsSpotify className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="spotify"
							placeholder="Usuario de Spotify"
							onChange={handleNetworksChange}
							value={newUser.networks?.spotify}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="pinterest">Pinterest</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<FaPinterest className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="pinterest"
							placeholder="Usuario de Pinterest"
							onChange={handleNetworksChange}
							value={newUser.networks?.pinterest}
						/>
					</div>
				</div>
				<div className="flex flex-col">
					<label htmlFor="">Github</label>
					<div className="text-zinc-900 border bg-orange-50 border-neutral-900 px-3 py-2 rounded-xl flex gap-1">
						<p className="block p-1 border border-neutral-900 rounded-lg">
							<IoLogoGithub className="w-5 h-5" />
						</p>
						<input
							type="link"
							className="bg-orange-50 w-full focus:border-none focus:outline-none"
							name="github"
							placeholder="Usuario de Github"
							onChange={handleNetworksChange}
							value={newUser.networks?.github}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default EditNetworks;
