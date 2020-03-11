import React from "react"
import styled from "styled-components"

function About() {
  return (
    <AboutWrapper>
      <div className="about-content">
        <h1>Hi, I’m Yuki. Nice to meet you.</h1>
        <p>
          Since I learned coding at Le Wagon Tokyo in 2018, I found my true
          interest in Web Development. I've also worked with talented
          international team. Looking to leverage my skill and experience into a
          role as a web developer.
        </p>
      </div>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.section`
  background: var(--main);
  text-align: center;
  padding-bottom: 15rem;
  padding-top: 5rem;

  .about-content {
    width: 90%;
    margin: auto;
  }
  h1,
  p {
    font-size: 1.75rem;
    color: white;
    padding: 1rem;
  }
  p {
    font-size: 1.2rem;
    opacity: 0.7;
  }

  @media (min-width: 768px) {
    .about-content {
      width: 70%;
    }
    h1 {
      font-size: 2rem;
    }
  }
`

export default About
