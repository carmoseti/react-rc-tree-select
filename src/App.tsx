import {Fragment, FunctionComponent, useState} from 'react';
import TreeSelect, {SHOW_PARENT} from "rc-tree-select"

import "rc-tree-select/assets/index.less"
import "./index.css"

interface OwnProps {
}

type Props = OwnProps;

const App: FunctionComponent<Props> = () => {
    const [value, setValue] = useState<Array<string>>([])
    return (
        <Fragment>
            <p>rc-tree-select</p>
            <div>
                <TreeSelect
                    treeData={[
                        {
                            label: 'DOCUMENTS',
                            value: '[DOCUMENTS]',
                            key: '[DOCUMENTS]',
                            checkable: true,
                            children: [
                                {label: 'pdf', value: 'pdf', key: 'pdf', checkable: true},
                                {label: 'doc', value: 'doc', key: 'doc', checkable: true},
                                {label: 'docx', value: 'docx', key: 'docx', checkable: true},
                                {label: 'xlsx', value: 'xlsx', key: 'xlsx', checkable: true},
                                {label: 'ppt', value: 'ppt', key: 'ppt', checkable: true}
                            ]
                        },
                        {
                            label: 'IMAGES',
                            value: '[IMAGES]',
                            key: '[IMAGES]',
                            checkable: true,
                            children: [
                                {label: 'png', value: 'png', key: 'png', checkable: true},
                                {label: 'jpg', value: 'jpg', key: 'jpg', checkable: true},
                                {label: 'jpeg', value: 'jpeg', key: 'jpeg', checkable: true},
                                {label: 'ico', value: 'ico', key: 'ico', checkable: true},
                                {label: 'svg', value: 'svg', key: 'svg', checkable: true}
                            ]
                        },
                        {
                            label: 'COMPRESSED',
                            value: '[COMPRESSED]',
                            key: '[COMPRESSED]',
                            checkable: true,
                            children: [
                                {label: 'gzip', value: 'gzip', key: 'gzip', checkable: true},
                                {label: 'zip', value: 'zip', key: 'zip', checkable: true},
                                {label: 'rar', value: 'rar', key: 'rar', checkable: true},
                            ]
                        },
                    ]}
                    multiple={true}
                    showCheckedStrategy={SHOW_PARENT}
                    treeCheckable={true}
                    onChange={(...args) => {
                        console.log(args)
                        setValue(args[0])
                    }}
                    value={value}
                    className={'rc-tree-select-custom'}
                />
            </div>
        </Fragment>
    );
};

export default App;
