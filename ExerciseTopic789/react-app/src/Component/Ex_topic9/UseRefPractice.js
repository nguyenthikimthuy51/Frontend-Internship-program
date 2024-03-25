import React, { useEffect, useRef, useState, memo } from "react";

function UseRefPractice() {
    const [count, setCount] = useState(60)
    const timerId = useRef()
    const prevCount = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])

    const handleStart = () => {
        timerId.current = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timerId.current)
    }

    console.log(count, prevCount.current);
    return (
        <div className="text-center">
            <h1 className="text-4xl">{count}</h1>
            <button
                className='bg-blue-700 text-white px-5 py-2 rounded-full m-4'
                onClick={handleStart}
            >
                start
            </button>
            <button
                className='bg-blue-700 text-white px-5 py-2 rounded-full m-4'
                onClick={handleStop}
            >
                stop
            </button>
        </div>
    )

}

export default memo(UseRefPractice);