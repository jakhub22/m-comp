import CodeTemplate from '@/components/Temp/CodeTemplate';
import Template from '@/components/Temp/Template';
import { Button } from '@/library';
import React from 'react';

export default function MButton() {
    const apiList = [
        {
            property: 'type',
            description:
                'primary, ghost, dashed, link, text, default, khadgalakh, butsakh гэсэн сонголтоос авч ашиглана',
            type: 'string',
            default: '-',
        },
        {
            property: 'khuleelgekhTsag',
            description: 'onClick хийх үед хүлээх хугацааг тохируулж өгнө.',
            type: 'number',
            default: '-',
        },
        {
            property: 'background',
            description: 'Товчны арын өнгийг тохируулж өгнө.',
            type: 'hex',
            default: '-',
        },
        {
            property: 'color',
            description: 'Товчны үсэгний өнгийг тохируулж өгнө.',
            type: 'hex',
            default: '-',
        },
        {
            property: 'danger',
            description:
                'Хэрэв товчинд өнгө өгөх бол заавал danger утгыг дамжуулах ёстой.',
            type: 'boolean',
            default: 'false',
        },
    ];
    return (
        <Template
            apiList={apiList}
            antApi="https://ant.design/components/button/#API"
        >
            <CodeTemplate
                id="IBIAntTovch1"
                title="Энгийн товч"
                code={`
import { IBIAntTovch } from "ibisc";
export default () => (
<IBIAntTovch>IBIAntTovch</IBIAntTovch>
);
        `}
            >
                <Button name="MAntTovch" />
            </CodeTemplate>
            <CodeTemplate
                id="IBIAntTovch1"
                title="Энгийн товч"
                code={`
import { IBIAntTovch } from "ibisc";
export default () => (
<IBIAntTovch>IBIAntTovch</IBIAntTovch>
);
        `}
            >
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
            </CodeTemplate>
            <CodeTemplate
                id="IBIAntTovch1"
                title="Энгийн товч"
                code={`
import { IBIAntTovch } from "ibisc";
export default () => (
<IBIAntTovch>IBIAntTovch</IBIAntTovch>
);
        `}
            >
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
                <Button name="MAntTovch" />
            </CodeTemplate>
        </Template>
    );
}
