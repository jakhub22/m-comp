import React from 'react';
import { useMainContext } from '@/context.js/main';
import { useRouter } from 'next/router';

export default function Sidebar() {
    const { mainData, changeMainData } = useMainContext();
    const routes = useRouter();

    function changeSelectedMenu(sideMenu) {
        mainData.selectedSideMenu = sideMenu.name;
        if (sideMenu.path) routes.push(sideMenu.path);
        changeMainData();
    }

    return (
        <div className="h-full w-full">
            <div className="h-full overflow-auto py-5">
                {Object.keys(mainData.routes).map((x, i) => (
                    <div key={`${i}-${x}`}>
                        <div
                            key={`${i}-${x}-${i}`}
                            className="mx-3 mb-4 border-b px-3 py-2 text-lg font-medium text-gray-400"
                        >
                            {x}
                        </div>
                        {mainData.routes[x].map((c, ci) => (
                            <div className="flex gap-3">
                                <button
                                    key={`${ci}-${c.name}`}
                                    className={`flex w-full p-3 pl-6 hover:bg-[#e6f4ff] hover:text-[#1677ff] ${
                                        mainData.selectedSideMenu === c.name &&
                                        'bg-[#e6f4ff] text-[#1677ff]'
                                    }`}
                                    onClick={() => changeSelectedMenu(c)}
                                >
                                    {c.name}
                                </button>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
}
