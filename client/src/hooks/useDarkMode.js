// 1
import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js';

// 2
export const useDarkMode = initialValue => {
	const [darkMode, setDarkMode] = useLocalStorage(initialValue);

	useEffect(() => {
		if (darkMode === true) {
			return document.querySelector('body').classList.add('dark-mode');
		} else {
			return document.querySelector('body').classList.remove('dark-mode');
		}
	}, [darkMode]);

	return [darkMode, setDarkMode];
};

// 3
