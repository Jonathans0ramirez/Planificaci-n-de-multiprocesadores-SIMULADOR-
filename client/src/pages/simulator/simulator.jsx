import React, { Fragment, useState, useRef } from 'react';
import { Transition } from 'react-transition-group';
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

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const Content = ({ text, nodeRef, setText, setStatus, onClickBtn }) => (
    <Fragment>
        <Row style={{ padding: '20px 37px', border: '1px solid black' }}>
            <Menu
                paragraphs={menuParagraphs}
                iconButtonObj={menuIconButtons}
                text={text}
                setOutputText={setText}
                onClickBtn={onClickBtn}
                setStatus={setStatus}
            />
        </Row>
        <Transition in={text ? true : false} timeout={duration} nodeRef={nodeRef}>
            {state => (
                <Row style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    <OutputScreen text={text} />
                </Row>
            )}
        </Transition>
    </Fragment>
);

const Simulator = () => {
    const nodeRef = useRef(null)
    const [text, setText] = useState('');
    const [status, setStatus] = useState('Waiting');

    const handleToggle = (e) => {
        text ? setText('') : setText('No me parece');
    }

    return (
        <PageHeader
            title="Planificación de multiprocesadores"
            className="site-page-header"
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
            >
            </Content>
        </PageHeader>
    )
}

export default Simulator;