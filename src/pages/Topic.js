import React from "react";
import { useParams } from "react-router-dom";



function Topic() {
    const { topic } = useParams('topic');

    return (
        <>
            <div style={{backgroundColor: 'aqua'}}>
                <h1> {topic}</h1>
            </div>

        </>
    )
}

export default Topic;