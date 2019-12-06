import React, {useEffect} from 'react';
import {UseLocalStorage} from './UseLocalStorage';

export const UseDarkMode = () => {
    const [darkMode, setDarkMode] = UseLocalStorage('DarkMode');

    useEffect(() => {
        const body = document.querySelector('body');
        darkMode ? body.classList.add('dark-mode'): body.classList.remove('dark-mode');
    }, [darkMode]);

    return [darkMode, setDarkMode];

};