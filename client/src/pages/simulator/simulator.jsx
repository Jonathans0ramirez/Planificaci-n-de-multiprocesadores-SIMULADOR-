import React, { Fragment, useState } from 'react';
import {
    PageHeader,
    Tag,
    Row
} from 'antd';
import {
    ClockCircleOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
    SyncOutlined
} from '@ant-design/icons';

import iconSimulator from '../../assets/iconSimulator.svg';
import OutputScreen from '../../components/output/outputScreen';
import Menu from '../../components/menu/menu';
import {
    menuIconButtons,
    menuParagraphs
} from '../../assets/data';
import 'antd/dist/antd.css';
import './simulator.module.css';

const Content = ({ text, setText }) => (
    <Fragment>
        <Row style={{ padding: '20px 37px', border: '1px solid black' }}>
            <Menu
                paragraphs={menuParagraphs}
                iconButtonObj={menuIconButtons}
                text={text}
                setOutputText={setText}
            />
        </Row>
        {
            text && <Row>
                <OutputScreen text={text} />
            </Row>
        }
    </Fragment>
);

const Simulator = () => {
    const [text, setText] = useState('NO ME PARECE');
    return (
        <PageHeader
            title="Planificación de multiprocesadores"
            className="site-page-header"
            subTitle="SIMULADOR"
            tags={
                <>
                    <Tag icon={<SyncOutlined spin />} color="gold">Running</Tag>
                    <Tag icon={<CheckCircleOutlined />} color="green">Ready</Tag>
                    <Tag icon={<CloseCircleOutlined />} color="red">Error</Tag>
                    <Tag icon={<ClockCircleOutlined />} color="default">Waiting</Tag>
                </>
            }

            avatar={{ src: iconSimulator }}
        >
            <Content
                text={text}
                setText={setText}
            >
            </Content>
        </PageHeader>
    )
}

export default Simulator;