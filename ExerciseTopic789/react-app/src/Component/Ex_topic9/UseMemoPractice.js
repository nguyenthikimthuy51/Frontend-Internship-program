//useMemo tránh thực hiện lại một logic khi không cần thiết
import { useMemo, useState } from "react";

function UseMemoPractice() {
    const [count, setCount] = useState(0);
    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const sum = useMemo(() => {
        console.log('Tính toán tổng của mảng...');
        return numbers.reduce((total, num) => total + num, 0);
    }, [numbers]);
    return (
        <div className='text-center'>
            <p>Sum: {sum}</p>
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

export default UseMemoPractice;