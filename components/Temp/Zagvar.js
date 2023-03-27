import React, { useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useBodyUndurOlyo } from '../../src/index';
import routes from '../routes';

const useStyles = makeStyles({
    khuree: {
        width: '100%',
        height: (p) => p.undur,
        display: 'flex',
        padding: '10px 0px',
        position: 'relative',
    },
    menuKheseg: {
        width: '20%',
        borderRight: '1px solid #ddd',
        height: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        '&:hover': {
            overflow: 'auto',
        },
    },
    menu: {
        padding: '0 16px 0 28px',
        marginBottom: 8,
        height: '40px',
        display: 'flex',
        color: '#000000d9',
        alignItems: 'center',
        '&:hover': {
            backgroundColor: '#E6F7FF',
            color: '#1890ff',
        },
    },
    selectedMenuStyle: {
        backgroundColor: '#E6F7FF',
        color: '#1890ff',
        borderRight: '3px solid #1C97DF',
    },
});

export default function Zagvar() {
    const undur = useBodyUndurOlyo(0);
    const classes = useStyles({ undur });
    const [selectedMenu, setSelectedMenu] = useState(routes[0]);

    function selectMenu(menu) {
        setSelectedMenu(menu);
    }

    return (
        <div className={classes.khuree}>
            <div className={classes.menuKheseg}>
                {routes.map((item) => {
                    return (
                        <Link to={item.path}>
                            <div
                                className={`${classes.menu} ${
                                    selectedMenu.name === item.name &&
                                    classes.selectedMenuStyle
                                }`}
                                onClick={() => selectMenu(item)}
                            >
                                <span>{item.name}</span>
                            </div>
                        </Link>
                    );
                })}
            </div>
            <div style={{ position: 'absolute', left: '20%' }}>
                <Switch>
                    <Route
                        path={selectedMenu.path}
                        exact
                        component={selectedMenu.component}
                    />
                </Switch>
            </div>
        </div>
    );
}
