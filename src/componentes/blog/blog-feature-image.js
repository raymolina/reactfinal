import React from "react";

const BlogFeaturedImage = props => {
  if (!props.img) {
    return null;
  }

  return (
    <div ClassName="featured-image-wrapper">
      <img alt='' src={props.img} />
    </div>
  );
};

export default BlogFeaturedImage;
