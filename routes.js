import { Button, getBodyHeight, Hello } from './library/index';

export const componentRoutes = {
    Components: [
        {
            path: '/mButton',
            name: 'MButton',
            component: Button,
        },
        {
            path: '/hello',
            name: 'Hello',
            component: Hello,
        },
    ],
    Functions: [
        {
            path: '/getBodyHeight',
            name: 'getBodyHeight',
            component: getBodyHeight,
        },
    ],
};

export const backendRoutes = {
    Components: [
        {
            path: '/button',
            name: 'Service 1',
            component: Button,
        },
    ],
    Functions: [
        {
            path: '/getBodyHeight',
            name: 'Service 2',
            component: getBodyHeight,
        },
    ],
};
