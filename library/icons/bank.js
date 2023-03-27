import React from 'react';

export default function Bank({ color = '#ddd' }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            // stroke={color}
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.49935 9.16667V12.5H5.83268V9.16667H7.49935ZM4.16602 7.5H5.83268H7.49935H9.16602V9.16667V12.5V14.1667H7.49935H5.83268H4.16602V12.5V9.16667V7.5ZM14.166 9.16667V12.5H12.4993V9.16667H14.166ZM10.8327 7.5H12.4993H14.166H15.8327V9.16667V12.5V14.1667H14.166H12.4993H10.8327V12.5V9.16667V7.5Z"
                fill={color}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15 14.1667H5C4.53976 14.1667 4.16667 14.5398 4.16667 15C4.16667 15.4602 4.53976 15.8333 5 15.8333H15C15.4602 15.8333 15.8333 15.4602 15.8333 15C15.8333 14.5398 15.4602 14.1667 15 14.1667ZM5 12.5C3.61929 12.5 2.5 13.6193 2.5 15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15C17.5 13.6193 16.3807 12.5 15 12.5H5Z"
                fill={color}
            />
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.94055 7.49998H15.0595C15.4869 7.49998 15.8333 7.1535 15.8333 6.7261C15.8333 6.39808 15.6265 6.10569 15.3173 5.99642L10.2776 4.21585C10.098 4.15239 9.90202 4.15239 9.72239 4.21585L4.68274 5.99642C4.37346 6.10569 4.16667 6.39808 4.16667 6.7261C4.16667 7.1535 4.51314 7.49998 4.94055 7.49998ZM4.12753 4.42495C3.15216 4.76956 2.5 5.69164 2.5 6.7261C2.5 8.07397 3.59267 9.16664 4.94055 9.16664H15.0595C16.4073 9.16664 17.5 8.07397 17.5 6.7261C17.5 5.69164 16.8478 4.76956 15.8725 4.42495L10.8328 2.64439C10.2939 2.45399 9.70607 2.45399 9.16717 2.64439L4.12753 4.42495Z"
                fill={color}
            />
        </svg>
    );
}