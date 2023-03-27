import React from 'react';
import { Anchor } from 'antd';
import { isNullOrUndefined } from '@/library';
import Api from './Api';

const { Link } = Anchor;

function Template(props) {
    const { children, apiList, antApi } = props;

    console.log(apiList, 'apiList');

    function getLinks() {
        var anchors = [];
        if (children.length > 0)
            children?.map((x) => {
                if (!isNullOrUndefined(x.props.id))
                    anchors.push(
                        <Link
                            href={`#${x.props.id}`}
                            title={
                                !isNullOrUndefined(x.props.title)
                                    ? x.props.title
                                    : x.props.id
                            }
                        />,
                    );
            });
        else
            anchors.push(
                <Link
                    href={`#${children.props.id}`}
                    title={children.props.title}
                />,
            );
        anchors.push(<Link href={antApi} title={'API'} />);
        return anchors;
    }

    return (
        <div className="relative flex h-full w-full">
            <div className="w-[85%]">
                <h2 className="w-full">Жишээ код</h2>
                <div className="mb-10 columns-2 gap-3">{children}</div>
                <Api id="API" api={apiList} antApi={antApi} />
            </div>
            <div className="fixed right-0 top-28 flex w-[14%] justify-start p-3">
                <Anchor targetOffset="1">{getLinks()}</Anchor>
            </div>
        </div>
    );
}

export default Template;
