import React from "react";
import { useParams } from "react-router-dom";




function Thread() {
    const { thread } = useParams('thread');

    return (
        <>
            <main style={{backgroundColor: 'plum'}}>
                <h1> {thread} </h1>
            </main>

        </>
    )
}

export default Thread;