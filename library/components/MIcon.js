import React from 'react';
import { iconLibrary } from '../iconLibrary';

export default function MIcon({ name, style = { opacity: 1 }, className }) {
    const renderPaths = iconLibrary[name]?.paths.map((path, index) => (
        <path key={index} d={path}></path>
    ));
    const viewBox = iconLibrary[name]?.viewBox;

    return (
        <svg
            style={style}
            viewBox={viewBox}
            className={`h-5 w-5 ${className && className}`}
        >
            {renderPaths}
        </svg>
    );
}
