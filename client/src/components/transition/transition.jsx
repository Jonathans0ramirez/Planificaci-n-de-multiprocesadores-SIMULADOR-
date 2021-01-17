import React from 'react';
import {
    Row
} from 'antd';
import { Transition } from 'react-transition-group';

const duration = 300;

// const defaultStylePREVIO = {
//     transition: `opacity ${duration}ms ease-in-out`,
//     opacity: 0,
// }

// const transitionStylesPREVIO = {
//     entering: { opacity: 1 },
//     entered: { opacity: 1 },
//     exiting: { opacity: 0 },
//     exited: { opacity: 0 },
// };

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms`,
    opacity: 0,
    transform: "scale(0)",
    height: 0
}

const transitionStyles = {
    entering: { opacity: 1, transform: "scale(1)", height: "100%" },
    entered: { opacity: 1, transform: "scale(1)", height: "100%" },
    exiting: { opacity: 0, transform: "scale(0)", height: 0 },
    exited: { opacity: 0, transform: "scale(0)", height: 0 },
};

const TransitionJ = ({ prop, nodeRef, children }) => {
    return (
        <Transition in={prop ? true : false} timeout={duration} nodeRef={nodeRef}>
            {state => (
                <Row style={{
                    ...defaultStyle,
                    ...transitionStyles[state]
                }}>
                    {children}
                </Row>
            )}
        </Transition>
    );
};

export default TransitionJ;