import React, { useState, useEffect } from 'react';
import classes from './outputScreen.module.css';

const OutputScreen = ({ text }) => {
    const [magic, setMagic] = useState("");

    useEffect(() => {
        setMagic(`> ${text}`);
    }, [text]);

    return (
        <div className={classes.output}>
            <pre><output>
                {magic}
            </output></pre>
        </div>
    );
}

export default OutputScreen;