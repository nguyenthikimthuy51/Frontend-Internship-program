
import React from 'react';

import { useMagicColor } from './useMagicColor';

function BigCircle(props) {
    const color = useMagicColor()
    return (
        <div>
            <div className="big-circle h-60 w-60 text-center" style={{ backgroundColor: color }}>
                Big Circle
            </div>
        </div>

    );
}

export default BigCircle;
