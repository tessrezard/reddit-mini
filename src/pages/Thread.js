import React from "react";
import { useParams } from "react-router-dom";




function Thread() {
    const { thread } = useParams('thread');

    return (
        <>
            <div style={{backgroundColor: 'plum'}}>
                <h1> {thread} </h1>
            </div>

        </>
    )
}

export default Thread;