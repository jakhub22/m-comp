import React, { useEffect, useState } from 'react';
import { MIcon } from '@/library';
import { Tooltip } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export default function ExampleBox({ children, title, description, code }) {
    const [showCode, setShowCode] = useState(false);

    return (
        <div
            id={title}
            className="mb-3 h-fit break-inside-avoid rounded border shadow-md"
        >
            <div className="flex w-full items-center justify-center border-b py-1 font-semibold">
                {title}
            </div>
            <div className="px-6 pt-5 pb-3">{children}</div>
            <div className="flex w-full items-center justify-center">
                <div className="w-full border-t"></div>
                <div className="font-ttCommons px-2 text-[#8D98AB]">
                    Тайлбар
                </div>
                <div className="w-full border-t"></div>
            </div>
            <div className="px-6 pt-3 pb-5">{description}</div>
            <div className="flex w-full items-center justify-center gap-2 border-t py-2">
                <Tooltip title="Хуулах">
                    <CopyToClipboard text={code}>
                        <div>
                            <MIcon
                                name="copy"
                                className={`fill-gray-400 hover:fill-black`}
                            />
                        </div>
                    </CopyToClipboard>
                </Tooltip>
                <Tooltip title="Код харах">
                    <div onClick={() => setShowCode(!showCode)}>
                        <MIcon
                            name="code"
                            className={`fill-gray-400 hover:fill-black`}
                        />
                    </div>
                </Tooltip>
            </div>
            {showCode && (
                <div className="w-full truncate">
                    <SyntaxHighlighter language="javascript" style={vs2015}>
                        {code}
                    </SyntaxHighlighter>
                </div>
            )}
        </div>
    );
}
