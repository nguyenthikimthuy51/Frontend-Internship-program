import { memo } from "react";

function MemoComponent() {
    console.log('re-render');

    return (
        <h2>Component use UseMemo</h2>
    )
}

export default memo(MemoComponent);