import { useMemo, useState } from "react";
import UseMemoComponent from "./MemoComponent";

function MemoPractice() {
    const [count, setCount] = useState(0);

    return (
        <div className='text-center'>
            <UseMemoComponent />
            <p>You clicked {count} times</p>
            <button
                onClick={() => setCount(count + 1)}
                className='bg-blue-700 text-white px-5 py-2 rounded-full'
            >
                Click me
            </button>
        </div>
    );
}

export default MemoPractice;