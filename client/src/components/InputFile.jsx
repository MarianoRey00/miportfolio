import React from "react";

function InputFile({ id, name, onChange, errors, multiple }) {
	return (
		<>
			<input
				type="file"
				id={id}
				name={name}
				onChange={onChange}
				className="border border-dashed border-customColor-blue p-8 w-full rounded-xl"
				{...(multiple ? { multiple: true } : {})}
			/>
			<p className="text-sm md:text-base text-red-600">
				{errors?.find((error) => error.field === name)?.message}
			</p>
		</>
	);
}

export default InputFile;
