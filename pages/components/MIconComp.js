import ExampleBox from '@/components/Example/ExampleBox';
import ExampleTemplate from '@/components/Example/ExampleTemplate';
import { MIcon } from '@/library';

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

export default function MIconComp() {
    return (
        <ExampleTemplate title="test" api={apiList}>
            <ExampleBox
                title="test1"
                description="tes1 description"
                code={`
<Tooltip title="Код харах">
    <div>
        <MIcon
            name="code"
            className={"fill-gray-400 hover:fill-black"}
        />
    </div>
</Tooltip>
            `}
            >
                <MIcon name="user" />
            </ExampleBox>
        </ExampleTemplate>
    );
}
