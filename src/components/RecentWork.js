import React from 'react';
import imgPlaceholder from "../assets/img-placeholder.png";
import './recentwork.css';

function RecentWork(props) {
    return (
        <div classNameName={props.cssName}>
                <img src={imgPlaceholder} alt="ImagePlaceholder"/>
            <p className="blog-title">{props.blogTitle}</p>
                <p className="blog-content"> {props.blogContent}</p>                                                                                                                                                                                                                                                                                                                                                                                             
            </div>

                );
}

export default RecentWork;
