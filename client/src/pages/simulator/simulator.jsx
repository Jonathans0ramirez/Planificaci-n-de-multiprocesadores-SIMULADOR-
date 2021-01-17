import React, { Fragment, useState, useRef } from 'react';
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
import TransitionJ from '../../components/transition/transition';
import Menu from '../../components/menu/menu';
import {
    menuIconButtons,
    menuParagraphs
} from '../../assets/data';
import 'antd/dist/antd.css';
import '../simulator/simulator.css';

const Content = ({ text, nodeRef, setText, setStatus, onClickBtn, showSimulatorBuilder }) => (
    <Fragment>
        <Row style={{ padding: '20px 37px', border: '1px solid black' }}>
            <Menu
                paragraphs={menuParagraphs}
                iconButtonObj={menuIconButtons}
                text={text}
                setOutputText={setText}
                onClickBtn={onClickBtn}
                setStatus={setStatus}
                showSimulatorBuilder={showSimulatorBuilder}
            />
        </Row>
        <TransitionJ
            prop={text}
            nodeRef={nodeRef}
        >
            <OutputScreen text={text} />
        </TransitionJ>
    </Fragment>
);

const Simulator = () => {
    const nodeRef = useRef(null);
    const [text, setText] = useState('');
    const [status, setStatus] = useState('Waiting');
    const [showSimulatorBuilder, setShowSimulatorBuilder] = useState(false);

    const handleToggle = (e) => {
        text && showSimulatorBuilder && setText('');
        setShowSimulatorBuilder(!showSimulatorBuilder);
    }

    return (
        <PageHeader
            title="Planificación de multiprocesadores"
            className="site-page-header jaojds"
            subTitle="SIMULADOR"
            tags={
                <>
                    {status === 'Running' && <Tag icon={<SyncOutlined spin />} color="gold">Running</Tag>}
                    {status === 'Ready' && <Tag icon={<CheckCircleOutlined />} color="green">Ready</Tag>}
                    {status === 'Error' && <Tag icon={<CloseCircleOutlined />} color="red">Error</Tag>}
                    {status === 'Waiting' && <Tag icon={<ClockCircleOutlined />} color="default">Waiting</Tag>}
                </>
            }

            avatar={{ src: iconSimulator }}
        >
            <Content
                text={text}
                nodeRef={nodeRef}
                setText={setText}
                setStatus={setStatus}
                onClickBtn={handleToggle}
                showSimulatorBuilder={showSimulatorBuilder}
            >
            </Content>
        </PageHeader>
    )
}

export default Simulator;