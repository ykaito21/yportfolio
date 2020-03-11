import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

function Project({ project }) {
  const { title, info, description, image, link } = project
  return (
    <Card>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="top">
          <Img fluid={image.fluid} className="card-img" />
        </div>
        <div className="bottom">
          <h1>{title}</h1>
          <p>{description.description}</p>
          <p className="title">Tools</p>
          <p>{info}</p>
        </div>
      </a>
    </Card>
  )
}

const Card = styled.div`
  border-radius: 0.5rem;
  border: 1px solid var(--light);
  box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.2);

  width: 100%;
  height: auto;
  .top {
    position: relative;
    overflow: hidden;
    .card-img {
      border-radius: 0.5rem 0.5rem 0 0;
      border-bottom: 1px solid var(--light);
      transition: all 0.5s linear;
      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .bottom {
    padding: 1rem 0;
    width: 80%;
    margin: auto;
  }
  h1 {
    color: var(--main);
    margin-bottom: 1rem;
  }
  p {
    margin-bottom: 2rem;
  }
  .title {
    color: var(--main);
    margin-bottom: 0.5rem !important;
  }
`

export default Project
