import React, { useEffect, useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useMainContext } from '@/context.js/main';
import { customFunctions } from '@/customFunctions';

export default function Functions() {
    console.log('first');
    const { mainData } = useMainContext();
    const [data, setData] = useState({});

    useEffect(() => {
        var a = customFunctions[mainData.selectedSideMenu];
        setData({ ...a });
    }, [mainData]);

    if (data)
        return (
            <div className="flex flex-col gap-4">
                <div className="mb-2"># Ашиглах</div>
                <SyntaxHighlighter language="javascript" style={vs2015}>
                    {`import { ${data.importName} } from "mbank-component"`}
                </SyntaxHighlighter>
                <div className="mb-2"># Тайлбар</div>
                <div className="bg-gray-100 p-2">{data.description}</div>
                <div className="mb-2"># Дамжуулах утга</div>
                <div className="bg-gray-100 p-2">{data.required}</div>
                <div className="mb-2"># Жишээ</div>
                <SyntaxHighlighter language="javascript" style={vs2015}>
                    {data.example}
                </SyntaxHighlighter>
            </div>
        );
    else return <div>Loading ... </div>;
}
