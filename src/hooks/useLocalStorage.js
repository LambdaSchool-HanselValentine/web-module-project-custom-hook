import React, { useState } from "react";

// ----------------------
// export const useLocalStorage = (key, initialValue) => {
// 	const [storedValue, setStoredValue] = useState(() => {
// 		if (localStorage.getItem(key)) {
// 			return JSON.parse(localStorage.getItem(key));
// 		}
// 		localStorage.setItem(key, JSON.stringify(initialValue));

// 		return initialValue;
// 	});

// 	const setValue = (value) => {
// 		setStoredValue(value);
// 		localStorage.setItem(key, JSON.stringify(value));
// 	};

// 	return [storedValue, setValue];
// };

export const useLocalStorage = (key, initialValue) => {
	// To retrieve an item from localStorage, call localStorage.getItem('itemName')
	// If that item doesn't exist, it will return undefined
	const [storedValue, setStoredValue] = useState(() => {
		// Get from local storage by key
		const item = localStorage.getItem(key);
		// Parse and return stored json or, if undefined, return initialValue
		return item ? JSON.parse(item) : initialValue;
	});

	// Save state
	const setValue = (value) => {
		setStoredValue(value);
		// Save to local storage
		window.localStorage.setItem(key, JSON.stringify(value));
	};

	return [storedValue, setValue];
};
