//Component life cycle using React Hooks
//useEffect
import React, { useState, useEffect } from 'react';
function LifecycleComponent() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    useEffect(
        () => {
            let setTime = () => {
                console.log("setTime is called");
                setCurrentDateTime(new Date());
            }
            let interval = setInterval(setTime, 1000);

            return () => {
                clearInterval(interval);
                console.log("return")
            }
        },
        []
    );
    return (
        <div><p>The current time is {currentDateTime.toString()}</p>
        {console.log("render")}</div>
    );
}
export default LifecycleComponent;
