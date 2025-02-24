import React from "react";

function Input({ type, id, name, value, onChange, placeholder, errors }) {
	return (
		<>
			<input
				type={type}
				id={id}
				name={name}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				className="text-zinc-900 border border-customColor-blue px-3 py-2 rounded-xl bg-orange-50"
			/>
			<p className="text-red-600">
				{errors?.find((error) => error.field === name)?.message}
			</p>
		</>
	);
}

export default Input;
