import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Anchor } from 'antd';
import ExampleApi from './ExampleApi';
import { useMainContext } from '@/context.js/main';

export default function ExampleTemplate({ children, title, api, source }) {
    const { mainData } = useMainContext();

    function getAnchorData() {
        var anchorData = [
            { key: 'Жишээ', href: '#examples', title: 'Жишээ', children: [] },
        ];
        if (children.length > 0) {
            for (let index = 0; index < children.length; index++) {
                const element = children[index];
                if (element.props?.title) {
                    anchorData[0].children.push({
                        key: `${element.props.title}-Anchor`,
                        href: `#${element.props.title}`,
                        title: element.props.title,
                    });
                }
            }
        }
        if (api) {
            anchorData.push({
                key: `API-Anchor`,
                href: `#API`,
                title: 'API',
            });
        }
        return anchorData;
    }

    return (
        <div className="relative flex h-full w-full gap-4">
            <div className="w-[90%] pr-8">
                <div className="mb-3 pl-3 text-2xl font-semibold">{title}</div>
                <div className="mb-4 pl-3">
                    <div className="mb-2"># Ашиглах</div>
                    <SyntaxHighlighter language="javascript" style={vs2015}>
                        {`import { ${mainData.selectedSideMenu} } from "mbank-component"`}
                    </SyntaxHighlighter>
                </div>
                <div className="mb-4 pl-3" id="examples">
                    # Жишээ
                </div>
                <div>
                    <div className="h-full columns-2 gap-2">{children}</div>
                    {api && <ExampleApi api={api} source={source} />}
                </div>
            </div>
            <div className="fixed right-0 top-20 w-[10%]">
                <Anchor items={getAnchorData()} />
            </div>
        </div>
    );
}
