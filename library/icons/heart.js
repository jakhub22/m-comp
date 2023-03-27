import React from 'react';

export default function Heart({ color }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path d="M20.84 4.56a5.5 5.5 0 0 0-7.78 0L12 5.22l-1.06-.66a5.5 5.5 0 0 0-7.78 0 5.5 5.5 0 0 0 0 7.78l1.06.66L12 21l7.78-7.78 1.06-.66a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
    );
}
