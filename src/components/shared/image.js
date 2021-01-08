import React from 'react';
import Img from 'gatsby-image';

const Image = ({ src, ...props }) => {
  return (
    <Img className={props.className ? props.className : ''} fluid={src.childImageSharp.fluid} />
  );
};

export default Image;
