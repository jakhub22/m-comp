import React, { useEffect, useState } from 'react';
import { Input, message } from 'antd';
import CopyToClipboard from 'react-copy-to-clipboard';
import { MIcon } from '@/library';
import { iconLibrary } from '../../library/iconLibrary';

export default function Icons() {
    const [searchIcon, setSearchIcon] = useState(null);
    const [iconsList, setIconsList] = useState([]);
    const [renderIconsList, setRenderIconsList] = useState([]);
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        setIconsList([]);
        if (iconLibrary) {
            var list = [];
            Object.keys(iconLibrary).forEach((x) => list.push(x));
            setIconsList([...list]);
            setRenderIconsList([...list]);
        }
    }, []);

    function onSearchIcon(value) {
        if (value === '') {
            setRenderIconsList([...iconsList]);
            setSearchIcon(null);
        } else {
            var filtered = iconsList.filter((str) => str.includes(value));
            setRenderIconsList([...filtered]);
            setSearchIcon(value);
        }
    }

    function clickedIcon(x) {
        messageApi.open({
            type: 'success',
            content: `<MIcon name="${x}" /> хуулагдлаа`,
        });
    }

    return (
        <div>
            {contextHolder}
            <div className="mb-3 pl-3 text-2xl font-semibold">Icons</div>
            <div className="mb-4 pl-3"># Жишээ</div>
            <div>
                <Input
                    placeholder="Хайх утга оруулна уу"
                    value={searchIcon}
                    onChange={(e) => onSearchIcon(e.target.value)}
                />
            </div>
            <br />
            <div className="w-full columns-10 gap-4">
                {renderIconsList.map((x, i) => (
                    <CopyToClipboard text={`<MIcon name="${x}" />`}>
                        <div
                            className="group mb-3 flex cursor-pointer items-center justify-center rounded border border-[#ddd] py-6 shadow-md transition-[0.3] ease-out hover:border-primary"
                            onClick={() => clickedIcon(x)}
                        >
                            <MIcon
                                name={x}
                                className="h-9 w-9 group-hover:scale-125 group-hover:fill-primary"
                            />
                        </div>
                    </CopyToClipboard>
                ))}
            </div>
            {/* <div className="my-4 pl-3">
                <div># Icons-д шинэ icon оруулах заавар</div>
                <SyntaxHighlighter language="javascript" style={vs2015}>
                    {`import { asd } from "mbank-component"`}
                </SyntaxHighlighter>
            </div> */}
        </div>
    );
}
