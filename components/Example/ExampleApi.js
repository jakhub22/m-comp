import React from 'react';

const tolgoi = ['Шинж чанар', 'Тайлбар', 'Төрөл', 'Анхны утга'];

export default function ExampleApi({ api, source }) {
    return (
        <div id="API" className="mt-7 w-full pb-7">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="mb-4 pl-3"># API</div>
                {source && <a href={source}>#Ant API</a>}
            </div>
            <div className="w-full border">
                <div className="mb-3 flex w-full bg-[#efefef] p-3 font-medium">
                    {tolgoi.map((x, i) => (
                        <div
                            key={`${i}-head`}
                            className="flex w-1/2 px-3"
                            style={{
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
                {api.map((x, i) => (
                    <div
                        key={`${i}-api`}
                        className="flex w-full items-center border-b border-[#ddd] p-3 last:border-none"
                    >
                        <div
                            className="flex w-1/2 px-3"
                            style={{
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
                            className="flex w-1/2 px-3"
                            style={{
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
                            className="flex w-1/2 px-3"
                            style={{
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
                            className="flex w-1/2 px-3"
                            style={{
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
