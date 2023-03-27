import React from 'react';

const tolgoi = ['Шинж чанар', 'Тайлбар', 'Төрөл', 'Анхны утга'];

export default function Api({ api, antApi, id }) {
    return (
        <div id={id} style={{ width: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h2>API</h2>
                {antApi && <a href={antApi}>#Ant API</a>}
            </div>
            <div className="w-full border">
                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        marginBottom: 10,
                        fontSize: '1rem',
                        fontWeight: '500',
                        padding: 10,
                        backgroundColor: '#efefef',
                    }}
                    className=""
                >
                    {tolgoi.map((x) => (
                        <div
                            style={{
                                width: '50%',
                                padding: '0 10px',
                                display: 'flex',
                                '&:nth-child(1)': {
                                    width: '20%',
                                    fontWeight: '500',
                                },
                                '&:nth-child(3)': {
                                    width: '15%',
                                },
                                '&:nth-child(4)': {
                                    width: '15%',
                                },
                            }}
                        >
                            {x}
                        </div>
                    ))}
                </div>
                {api.map((x) => (
                    <div
                        style={{
                            display: 'flex',
                            width: '100%',
                            borderBottom: '1px solid #ddd',
                            padding: 10,
                            alignItems: 'center',
                            '&:last-child': {
                                borderBottom: 'none',
                            },
                        }}
                    >
                        <div
                            style={{
                                width: '50%',
                                padding: '0 10px',
                                display: 'flex',
                                '&:nth-child(1)': {
                                    width: '20%',
                                    fontWeight: '500',
                                },
                                '&:nth-child(3)': {
                                    width: '15%',
                                },
                                '&:nth-child(4)': {
                                    width: '15%',
                                },
                            }}
                        >
                            {x.property}
                        </div>
                        <div
                            style={{
                                width: '50%',
                                padding: '0 10px',
                                display: 'flex',
                                '&:nth-child(1)': {
                                    width: '20%',
                                    fontWeight: '500',
                                },
                                '&:nth-child(3)': {
                                    width: '15%',
                                },
                                '&:nth-child(4)': {
                                    width: '15%',
                                },
                            }}
                        >
                            {x.description}
                        </div>
                        <div
                            style={{
                                width: '50%',
                                padding: '0 10px',
                                display: 'flex',
                                '&:nth-child(1)': {
                                    width: '20%',
                                    fontWeight: '500',
                                },
                                '&:nth-child(3)': {
                                    width: '15%',
                                },
                                '&:nth-child(4)': {
                                    width: '15%',
                                },
                                color: '#c41d7f',
                            }}
                        >
                            {x.type}
                        </div>
                        <div
                            style={{
                                width: '50%',
                                padding: '0 10px',
                                display: 'flex',
                                '&:nth-child(1)': {
                                    width: '20%',
                                    fontWeight: '500',
                                },
                                '&:nth-child(3)': {
                                    width: '15%',
                                },
                                '&:nth-child(4)': {
                                    width: '15%',
                                },
                            }}
                        >
                            {x.default}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
