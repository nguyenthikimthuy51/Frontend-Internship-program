import React, { memo, useCallback, useState } from "react";

function UseCallbackPractice() {
    const [text, setText] = useState('');

    const Wrap = () => {
        const [isChecked, setIsChecked] = useState(false);
        const toggleChecked = useCallback(() => setIsChecked(!isChecked), [
            isChecked
        ]);
        console.log('toggleChecked:', isChecked);
        return <Checkbox value={isChecked} onClick={toggleChecked} />;
    };

    const Checkbox = memo(({ value, onClick }) => {
        console.log('Checkbox is renderd!');
        return (
            <div className="text-center text-4xl" style={{ cursor: 'pointer' }} onClick={onClick}>
                {value ? '☑' : '□'}
            </div>
        );
    });
    return (
        <>
            <div className="text-center mt-10 text-2xl">
                <input className="bg-slate-300 rounded-lg p-2" type="text" placeholder="Enter text..." value={text} onChange={e => setText(e.target.value)} />
            </div>
            <Wrap />
        </>
    );
}

export default UseCallbackPractice;