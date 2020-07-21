import React, { useEffect, useState } from 'react';

function CounterFile() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    const [x, setX] = useState(0);
    const [y, sety] = useState(0);
    useEffect(() => {
        console.log('clicked');
        const tick = setInterval(incrementCount, 2000)
    document.title = `count ${count} Time`
    }, [])
    const moveHover = e => {
         console.log("mousemoveing");
        setX(e.clientX)
        sety(e.clientY)
    }
    useEffect(() => {
        console.log("mouseEvent");
        window.addEventListener("mousemove", moveHover)

        return () => {
            window.removeEventListener("mousemove", moveHover)
        }
    }, [])
  const incrementCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <input value={name} name="name" onChange={e => setName(e.target.value)}/>
            <button onClick = {incrementCount}>count {count} times</button>
            <div>
                setx- {x}---- sety-{y}
            </div>
        </div>
    );
}

export default CounterFile;