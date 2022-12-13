import React from 'react';
import {Link} from 'react-router-dom'
import striptags from "striptags"
const BlogItem = (props) => {
    const {
        id,
        blog_status,
        content,
        title,
        featured_image_url

    } = props.blogItem

    

    return (
        <div>
        < Link to={`/b/${id}`}>
             <h1>{title}</h1>
        </Link>
             <div>
                <div
                lines={5}
                ellipsis={
                    <span>
                        ...<Link to={`/b/${id}`}>Read more</Link>
                    </span>
                }>
                    {striptags(content)}
                </div>
             </div>
        </div>
    );
}

export default BlogItem;