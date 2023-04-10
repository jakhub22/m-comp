import React, { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { componentRoutes } from '../routes';

const MainContext = createContext({});

export default function MainProvider({ children }) {
    const routes = useRouter();
    const [mainData, setMainData] = useState({
        selectedMenu: 'Home',
        selectedSideMenu: 'MButton',
        routes: [],
    });

    useEffect(() => {
        changedMenu();
    }, [mainData.selectedMenu]);

    function changeMainData() {
        setMainData({ ...mainData });
    }

    function changedMenu() {
        switch (mainData.selectedMenu) {
            case 'Home':
                routes.push('/');
                break;
            case 'Components':
                changeRoute(componentRoutes);
                break;
            default:
                break;
        }
    }

    function changeRoute(route) {
        mainData.routes = route;
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
