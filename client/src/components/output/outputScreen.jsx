import React, { useState } from 'react';
import classes from './outputScreen.module.css';

const OutputScreen = () => {
    const [magic, setMagic] = useState("NO ME PARECE");

    return (
        <div className={classes.output}>
            <pre><output>
                {magic}
            </output></pre>
        </div>
    );
}

export default OutputScreen;