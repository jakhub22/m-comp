import ExampleBox from '@/components/Example/ExampleBox';
import ExampleTemplate from '@/components/Example/ExampleTemplate';
import { MIcon } from '@/library';

const apiList = [
    {
        property: 'name',
        description: 'Icons дундаас сонгож нэрийг авч ашиглана',
        type: 'string',
        default: '-',
    },
    {
        property: 'className',
        description: 'MIcon component-д тохируулах style-ийг оруулна',
        type: 'string',
        default: '-',
    },
];

export default function MIconComp() {
    return (
        <ExampleTemplate title="MIcon" api={apiList}>
            <ExampleBox
                title="Энгийн icon"
                description="MIcon-д name дамжуулж ашиглахад"
                code={`
<MIcon name="user" />
            `}
            >
                <MIcon name="user" />
            </ExampleBox>
            <ExampleBox
                title="Өнгө тохируулсан icon"
                description="MIcon-д className дамжуулан icon-ий өнгө солих"
                code={`
<MIcon name="user" className='fill-primary' />
            `}
            >
                <MIcon name="user" className="fill-primary" />
            </ExampleBox>
            <ExampleBox
                title="Custom styled icon"
                description="MIcon-д className дамжуулан өөрчлөх"
                code={`
<MIcon
    name="user"
    className="h-7 w-7 fill-gray-600 hover:fill-black"
/>
            `}
            >
                <MIcon
                    name="user"
                    className="h-7 w-7 fill-gray-600 hover:fill-black"
                />
            </ExampleBox>
        </ExampleTemplate>
    );
}
