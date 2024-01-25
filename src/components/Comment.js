import React, { useRef, useEffect, useState } from 'react';
import '../styles/CSS/main.css';
import { Link } from 'react-router-dom';
import { FaComment } from 'react-icons/fa'; // comment/speech bubble icon


const Comment = ({ comment }) => {
    return (
        <>
            <div>
                <p>
                    {comment.body}
                </p>
            </div>
        </>


    );
};

export default Comment;