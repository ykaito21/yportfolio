import React, { Component } from "react"
import { BannerButton } from "../Globals/Button"
import styled from "styled-components"
import { FaGithub } from "react-icons/fa"
import Project from "./Project"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let tempCategories = new Set(tempItems)
  let categories = Array.from(tempCategories)
  categories = ["All", ...categories]
  return categories
}

class Projects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: props.projects.edges,
      projectItems: props.projects.edges,
      categories: getCategories(props.projects.edges),
    }
  }

  handleItems = category => {
    let tempItems = [...this.state.projects]
    if (category === "All") {
      this.setState({
        projectItems: tempItems,
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === category)
      this.setState({
        projectItems: items,
      })
    }
  }
  render() {
    if (this.state.projects.length > 0) {
      return (
        <ProjectsWrapper>
          <div className="project-container">
            <h1 className="title">My Projects</h1>
            <div className="category-btn">
              {this.state.categories.map((category, index) => {
                return (
                  <BannerButton
                    key={index}
                    onClick={() => this.handleItems(category)}
                    className="btn"
                  >
                    {category}
                  </BannerButton>
                )
              })}
            </div>
            <div className="project-contents">
              {this.state.projectItems.map(({ node }) => {
                return <Project key={node.id} project={node} />
              })}
            </div>
            <a
              href="https://github.com/ykaito21"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BannerButton className="github-btn">
                <span>Check My GitHub </span>
                <FaGithub className="icon" />
              </BannerButton>
            </a>
          </div>
        </ProjectsWrapper>
      )
    }
  }
}

const ProjectsWrapper = styled.section`
  margin: 0 auto 10rem;
  display: flex;
  justify-content: center;
  text-align: center;

  .project-contents {
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
  .category-btn {
    display: flex;
    justify-content: center;
    margin: 2rem 2rem 3rem;
    .btn {
      margin: 0 0.5rem;
    }
  }

  .github-btn {
    margin: 3rem auto;
  }

  .title {
    margin-bottom: 4rem;
  }
  .icon {
    vertical-align: text-top;
  }

  @media (min-width: 768px) {
    .project-contents {
      width: 80%;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1199px) {
    /* width: 90%; */
    .project-contents {
      width: 75%;
      grid-template-columns: repeat(3, 1fr);
    }
  }
`

export default Projects
