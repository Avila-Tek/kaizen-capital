import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";

const Image = ({ src, ...props }) => {
  return (
    <GatsbyImage
      image={src.childImageSharp.gatsbyImageData}
      className={props.className ? props.className : ''} />
  );
};

export default Image;
