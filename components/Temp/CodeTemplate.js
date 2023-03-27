import { Tooltip } from 'antd';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Highlight from 'react-highlight';

function CodeTemplate({ id, title, children, code }) {
    const [showCode, setShowCode] = useState(false);

    return (
        <div id={id} className="mb-4 h-fit w-full break-inside-avoid border">
            <div className="flex w-full justify-center border-b p-3 font-medium">
                {title}
            </div>
            <div className=" w-full border-b border-dashed p-3">{children}</div>
            <div
                style={{
                    width: '100%',
                    padding: 6,
                    display: 'flex',
                    height: '26px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#00000073',
                    '& #action': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                    borderBottom: showCode && '1px solid #ddd',
                }}
            >
                <div id="action">
                    <CopyToClipboard text={code}>
                        <Tooltip title="Хуулах">
                            {/* <IBIDurs
                                icon="ant-design:snippets-outlined"
                                style={{
                                    width: '16px',
                                    height: '16px',
                                    margin: '0 10px',
                                    '&:hover': {
                                        color: '#000000d9',
                                        width: '18px',
                                        height: '18px',
                                    },
                                }}
                            /> */}
                        </Tooltip>
                    </CopyToClipboard>
                </div>
                <div id="action" onClick={() => setShowCode(!showCode)}>
                    <Tooltip title="Код харах">
                        {/* <IBIDurs
                            icon="ant-design:arrows-alt-outlined"
                            style={{
                                width: '16px',
                                height: '16px',
                                margin: '0 10px',
                                '&:hover': {
                                    color: '#000000d9',
                                    width: '18px',
                                    height: '18px',
                                },
                            }}
                        /> */}
                    </Tooltip>
                </div>
            </div>
            {showCode && (
                <div
                    style={{
                        '& ::-webkit-scrollbar': {
                            width: 8,
                            height: 8,
                        },
                        '& ::-webkit-scrollbar-thumb': {
                            background: '#888',
                        },
                        '& ::-webkit-scrollbar-thumb:hover': {
                            background: '#666',
                        },
                    }}
                >
                    <Highlight language="javascript">{code}</Highlight>
                </div>
            )}
        </div>
    );
}

export default CodeTemplate;
