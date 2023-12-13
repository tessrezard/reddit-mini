import React from "react";
import { useParams } from "react-router-dom";



function Topic() {
    const { topic } = useParams('topic');

    return (
        <>
            <main style={{backgroundColor: 'aqua'}}>
                <h1> {topic}</h1>
            </main>

        </>
    )
}

export default Topic;