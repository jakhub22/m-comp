import React from 'react';
import Bank from '../icons/bank';
import Heart from '../icons/heart';

export default function MIcon({
    name,
    color,
    height = 24,
    width = 24,
    className,
}) {
    const Icon = getIconByName(name);

    function getIconByName(name) {
        switch (name) {
            case 'heart':
                return Heart;
            case 'bank':
                return Bank;
            default:
                return null;
        }
    }

    return (
        <div
            style={{ height: height, width: width }}
            className={className && className}
        >
            <Icon color={color} />
        </div>
    );
}

// import React, { useEffect, useState } from 'react';

// export default function MIcon({
//     name,
//     color,
//     height = 24,
//     width = 24,
//     className,
// }) {
//     const [Icon, setIcon] = useState(null);

//     useEffect(() => {
//         async function importIcon() {
//             try {
//                 const module = await import(`../icons/${name}`);
//                 setIcon(module.default);
//             } catch (error) {
//                 console.error(`Could not import icon ${name}: ${error}`);
//             }
//         }

//         importIcon();
//     }, [name]);

//     console.log(Icon, 'Icon');

//     if (Icon === null || Icon === undefined) {
//         return null;
//     }

//     return (
//         <div
//             style={{ height: height, width: width }}
//             className={className && className}
//         >
//             <Icon color={color} />
//         </div>
//     );
// }
