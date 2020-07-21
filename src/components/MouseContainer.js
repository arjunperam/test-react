import React, { useState } from 'react';
import CounterFile from './CounterFile';
function MouseContainer() {
    const [display, setDisplay] = useState(true);
    return (
        <div>
            <button onClick = {() => setDisplay(!display)}>Togglr Display</button>
            {display && <CounterFile/>}
        </div>
    );
}

export default MouseContainer;