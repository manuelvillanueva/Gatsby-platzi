import React from "react"
import {graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';

export default function Image({name}) {
  const data = useStaticQuery(graphql`
  query GET_IMAGE {
    icon: file(relativePath: {eq: "icon.png"}) {
      childImageSharp {
        fixed {
          height
          aspectRatio
          src
          srcWebp
        }
      }
    }
  }`
  )
   return <Img fixed={data[name].childImageSharp.fixed}/>;
}