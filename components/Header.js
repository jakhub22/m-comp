import React from 'react';
import { useMainContext } from '@/context.js/main';

const menuItems = ['Components', 'Front Standards', 'Backend Services'];

export default function Header() {
    const { mainData, changeMainData } = useMainContext();

    function changeSelectedMenu(menuIndex) {
        mainData.selectedMenu = menuIndex;
        changeMainData();
    }

    return (
        <div
            id="MHeader"
            className="flex h-14 w-full items-center border-b px-14 shadow-md"
        >
            <div className="flex w-full items-center justify-between">
                <div>LOGO</div>
                <div className="flex items-center gap-6">
                    {menuItems.map((x, i) => (
                        <button
                            className={`h-14 py-3 hover:border-t-2 hover:border-[#1677ff] ${
                                mainData.selectedMenu === i &&
                                'border-t-2 border-[#1677ff]'
                            }`}
                            onClick={() => changeSelectedMenu(i)}
                        >
                            {x}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
