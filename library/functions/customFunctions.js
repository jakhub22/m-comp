import { useEffect, useState } from 'react';

export function getBodyHeight() {
    const [bodyHeight, setBodyHeight] = useState(0);
    let navbar;
    if (typeof document !== 'undefined') {
        navbar = document && document.querySelector('#Navbar');
    }
    let navbarHeight = 0;
    if (navbar) {
        navbarHeight = navbar.offsetHeight;
    }

    useEffect(() => {
        const undurOorchlogdohod = () =>
            setBodyHeight(window.innerHeight - navbarHeight);
        window.addEventListener('resize', undurOorchlogdohod);
        return () => {
            window.removeEventListener('resize', undurOorchlogdohod);
        };
    }, []);

    useEffect(() => {
        setBodyHeight(window.innerHeight - navbarHeight);
    }, [navbarHeight]);

    return bodyHeight;
}

export function isEmpty(value) {
    return value === null || value === undefined || value === '';
}

export function emailValidation(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
}
