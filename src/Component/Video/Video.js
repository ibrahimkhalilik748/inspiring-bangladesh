import React from 'react';
import './Video.css';

const Video = () => {
    return (
        <div className="container">
            <h1>Learn with Sumit Bangladesh</h1>
            <br />
            <div className="video">
                <iframe src="https://www.youtube.com/embed/5Xy-t8k_M4A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
};

export default Video;