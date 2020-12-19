import React, { Fragment, useState } from 'react';
import {
    PageHeader,
    Typography,
    Button,
    Tag,
    Row
} from 'antd';
import {
    ClockCircleOutlined,
    CloseCircleOutlined,
    CheckCircleOutlined,
    SyncOutlined
} from '@ant-design/icons';

import iconSimulator from './assets/iconSimulator.svg';
import OutputScreen from '../../components/output/outputScreen';
import 'antd/dist/antd.css';
import simu from './simulator.module.css';

const { Paragraph } = Typography;

const IconLink = ({ src, text }) => (
    <Button className={simu['link']} type="link">
        <span><img className={simu['link-icon']} src={src} alt={text} /></span>{text}
    </Button>
);

const content = (
    <>
        <Paragraph>
            Ant Design interprets the color system into two levels: a system-level color system and a
            product-level color system.
        </Paragraph>
        <Paragraph>
            Ant Design's design team preferred to design with the HSB color model, which makes it
            easier for designers to have a clear psychological expectation of color when adjusting colors,
            as well as facilitate communication in teams.
        </Paragraph>
        <div>
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"
                text="Quick Start"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"
                text=" Product Info"
            />
            <IconLink
                src="https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"
                text="Product Doc"
            />
        </div>
    </>
);

const Content = ({ children, extraContent, text }) => (
    <Fragment>
        <Row style={{ padding: '20px 37px', border: '1px solid black' }}>
            <div style={{ flex: 1 }}>{children}</div>
            <div className={simu['image']}>{extraContent}</div>
        </Row>
        {
            text && <Row>
                <OutputScreen text={text} />
            </Row>
        }
    </Fragment>
);

const Simulator = () => {
    const [text] = useState('NO ME PARECE');
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
                extraContent={
                    <img
                        src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
                        alt="content"
                        width="100%"
                    />
                }
                text={text}
            >
                {content}
            </Content>
        </PageHeader>
    )
}

export default Simulator;