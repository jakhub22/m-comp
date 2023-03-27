import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { componentRoutes, backendRoutes } from '../routes';

const MainContext = createContext({});

export default function MainProvider({ children }) {
    const routes = useRouter();
    const [mainData, setMainData] = useState({
        selectedMenu: 0,
        selectedSideMenu: 'MButton',
        routes: [],
    });

    useEffect(() => {
        changedMenu();
    }, []);

    useEffect(() => {
        changedMenu();
    }, [mainData.selectedMenu]);

    function changeMainData() {
        setMainData({ ...mainData });
    }

    function changedMenu() {
        switch (mainData.selectedMenu) {
            case 0:
                mainData.routes = componentRoutes;

                break;
            case 1:
                mainData.routes = backendRoutes;
                break;
            default:
                mainData.routes = componentRoutes;
                break;
        }
        mainData.selectedSideMenu =
            mainData.routes[Object.keys(mainData.routes)[0]][0].name;
        routes.push(mainData.routes[Object.keys(mainData.routes)[0]][0].path);
        changeMainData();
    }

    return (
        <MainContext.Provider value={{ mainData, changeMainData }}>
            {children}
        </MainContext.Provider>
    );
}

export const useMainContext = () => useContext(MainContext);
