import React from "react";

function ImageModal({ isOpen, onClose, image }) {
	if (!isOpen) return null;
	return (
		<div
			className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 text-black z-50 max-h-screen"
			onClick={onClose}
		>
			<button
				onClick={onClose}
				className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300 focus:outline-none"
			>
				X
			</button>
			<img
				src={image?.url}
				alt=""
				className="max-h-[80%] max-w-[90%] object-contain"
				onClick={(e) => {
					e.stopPropagation();
				}}
			/>
		</div>
	);
}

export default ImageModal;
