import React from "react";

function InputColor({ name, id, onChange, value, className }) {
	return (
		<input
			type="color"
			name={name}
			id={id}
			onChange={onChange}
			value={value}
			className={className}
		/>
	);
}

export default InputColor;
