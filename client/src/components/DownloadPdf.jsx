import React, { useRef } from "react";
import { BsFiletypePdf } from "react-icons/bs";
import { GoArrowDown } from "react-icons/go";

const DownloadPDF = ({ rawUrl }) => {
	// const downloadAsPdf = async () => {
	// 	const res = await fetch(rawUrl);

	// 	if (!res.ok) {
	// 		console.error("Error al obtener el archivo");
	// 		return;
	// 	}

	// 	const blob = await res.blob();

	// 	const url = URL.createObjectURL(blob);
	// };

	const linkRef = useRef(null);

	const downloadAsPdf = async () => {
		try {
			const response = await fetch(rawUrl);

			if (!response.ok) {
				console.error("Error al obtener el archivo");
				return;
			}

			const blob = await response.blob();

			const url = URL.createObjectURL(blob);

			linkRef.current.href = url;
			linkRef.current.download = "archivo.pdf";

			linkRef.current.click();

			URL.revokeObjectURL(url);
		} catch (error) {
			console.error("Hubo un error al descargar el archivo:", error);
		}
	};

	return (
		<div>
			<button
				onClick={downloadAsPdf}
				className="py-2.5 pl-3 pr-6 border border-zinc-200 group-hover:border-zinc-200 rounded-xl flex gap-2 group text-zinc-200"
			>
				<BsFiletypePdf className="text-2xl group-hover:text-orange-50" />{" "}
				<span className="mt-1 text-sm group-hover:text-orange-50">
					Descargar PDF
				</span>
				<GoArrowDown className="text-xl mt-1 group-hover:text-orange-50" />
			</button>
			<a ref={linkRef} style={{ display: "none" }}></a>
		</div>
	);
};

export default DownloadPDF;
