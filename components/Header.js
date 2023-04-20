import React from 'react';
import { useMainContext } from '@/context/main';
import { MIcon } from '@/library';

const menuItems = ['Home', 'Components', 'Functions'];

export default function Header() {
    const { mainData, changeMainData } = useMainContext();

    function changeSelectedMenu(menuName) {
        mainData.selectedMenu = menuName;
        changeMainData();
    }

    return (
        <div
            id="Navbar"
            className="z-10 flex h-14 w-full items-center border-b bg-white px-14 shadow-md"
        >
            <div className="flex w-full items-center justify-between">
                <div>
                    <MIcon name="mlogo" className="h-[30px] w-[130px]" />
                </div>
                <div className="flex items-center gap-6">
                    {menuItems.map((x, i) => (
                        <button
                            key={`${i}-${x}`}
                            className={`h-14 py-3 pt-[2px] hover:border-t-2 hover:border-[#1677ff] hover:pt-0 ${
                                mainData.selectedMenu === x &&
                                'border-t-2 border-[#1677ff] pt-0'
                            }`}
                            onClick={() => changeSelectedMenu(x)}
                        >
                            {x}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
