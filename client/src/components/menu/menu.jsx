import React from 'react';
import {
    Typography,
    Button
} from 'antd';

import 'antd/dist/antd.css';
import menuCss from './menu.module.css';
import gears from '../../assets/gears.gif';
import SimulatorBuilder from '../simulatorBuilder/simulatorBuilder';

const { Paragraph } = Typography;

const IconButton = ({ iconButtonObj, onClickBtn, showSimulatorBuilder }) => (
    <Button
        className={menuCss['link']}
        type="link"
        onClick={onClickBtn}
    >
        <span>
            <img
                className={menuCss['link-icon']}
                src={!showSimulatorBuilder ? iconButtonObj[0].src : iconButtonObj[1].src}
                alt={!showSimulatorBuilder ? iconButtonObj[0].text : iconButtonObj[1].text}
                width="24"
                height="24"
            />
        </span>
        {/* {!showSimulatorBuilder ? iconButtonObj[0].text : iconButtonObj[1].text} */}
    </Button>
);

const ContentMenu = ({ children, extraContent }) => (
    <>
        {children && <div style={{ flex: 1 }}>{children}</div>}
        {extraContent && <div className={menuCss['image']}>{extraContent}</div>}
    </>
)

const Menu = ({ paragraphs, showSimulatorBuilder, setOutputText, iconButtonObj, onClickBtn, setStatus }) => {

    const contenido = (
        <>
            {
                paragraphs && paragraphs.map((paragraph, index) => {
                    return <Paragraph
                        key={index}
                        style={{ textAlign: 'justify' }}
                    >
                        {paragraph}
                    </Paragraph>
                })
            }
            {
                showSimulatorBuilder &&
                <SimulatorBuilder
                    setStatus={setStatus}
                    setOutputText={setOutputText}
                />
            }
            {
                iconButtonObj && iconButtonObj.length > 0 &&
                <IconButton
                    iconButtonObj={iconButtonObj}
                    onClickBtn={onClickBtn}
                    showSimulatorBuilder={showSimulatorBuilder}
                />
            }
        </>
    );

    return (
        <ContentMenu
            extraContent={
                <img
                    className={menuCss.img_gears}
                    src={gears}
                    alt="content"
                    width="200px"
                />
            }
        >
            {contenido}
        </ContentMenu>
    )
}

export default Menu;