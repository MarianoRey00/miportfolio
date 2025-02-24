import React from "react";
function EditButton({ width, height, stroke }) {
	return (
		<div>
			<svg
				width={width}
				height={height}
				viewBox="0 0 17 17"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M10.899 3.49763L13.728 6.32663M14.294 1.23463L15.991 2.93163C16.0654 3.00593 16.1244 3.09416 16.1646 3.19128C16.2049 3.2884 16.2256 3.3925 16.2256 3.49763C16.2256 3.60276 16.2049 3.70686 16.1646 3.80398C16.1244 3.9011 16.0654 3.98933 15.991 4.06363L4.535 15.5186L1 16.2256L1.707 12.6896L13.162 1.23463C13.2363 1.16025 13.3245 1.10124 13.4216 1.06098C13.5188 1.02072 13.6229 1 13.728 1C13.8331 1 13.9372 1.02072 14.0344 1.06098C14.1315 1.10124 14.2197 1.16025 14.294 1.23463Z"
					stroke={stroke}
					strokeWidth="1.5"
					strokeMiterlimit="10"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
}

export default EditButton;
