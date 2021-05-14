import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useDarkMode = (key, initialValues, cb) => {
	const [state, setState] = useLocalStorage(key, initialValues);

	const setDarkMode = (e) => {
		setState({
			...state,
			[e.target.name]: e.target.value,
		});
	};

	return [state, setDarkMode];
};
