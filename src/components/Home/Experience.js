import React from "react"
import styled from "styled-components"
import { FaUserTie, FaGraduationCap, FaCode } from "react-icons/fa"

function Experience() {
  return (
    <ExperienceWrapper>
      <div className="experience-container">
        <div className="experience-group first">
          <FaUserTie className="icon" />
          <h1>Experience</h1>
          <p>
            Graduated from Temple University and Worked with talented people at
            two attractive startups.
          </p>
          <div>
            <p className="title">Learned Subjects</p>
            <p>Econimics, Asian Studies, Marketing</p>
          </div>
          <div>
            <p className="title">Skills</p>
            <ul>
              <li>Economic & Marketing Research</li>
              <li>Japanese (native)</li>
              <li> English (business)</li>
              <li>Chinese-Mandarin (beginner)</li>
              <li>Microsoft Office (Word, PowerPoint, Excel, Access)</li>
            </ul>
          </div>
        </div>
        <div className="experience-group">
          <FaGraduationCap className="icon" />
          <a
            href="https://www.lewagon.com/tokyo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1>Le Wagon</h1>
          </a>
          <p>Graduated from Le Wagon, an intensive 9-week coding bootcamp</p>
          <div>
            <p className="title">Aquired Languages</p>
            <p>HTML, CSS, Sass, JavaScript, Ruby, SQL </p>
          </div>
          <div>
            <p className="title">Used Frameworks & Tools</p>
            <ul>
              <li>Ruby on Rails</li>
              <li>Bootstrap</li>
              <li>Git & GitHub</li>
              <li>PostgreSQL</li>
              <li>Heroku</li>
              <li>Figma</li>
              <li>VS Code</li>
            </ul>
          </div>
        </div>
        <div className="experience-group last">
          <FaCode className="icon" />
          <h1>Now</h1>
          <p>Continue learning Coding and Looking for a Web Developer Job</p>
          <div>
            <p className="title">Focus</p>
            <p>Flutter, Firebase</p>
          </div>
          <div>
            <p className="title">Interest</p>
            <ul>
              <li>Node.js</li>
              <li>Go</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>Gatsby</li>
            </ul>
          </div>
        </div>
      </div>
    </ExperienceWrapper>
  )
}

const ExperienceWrapper = styled.section`
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 1700px;

  .experience-container {
    background: white;
    width: 90%;
    position: absolute;
    top: -10rem;
    display: grid;
    grid-template-columns: 1fr;
    box-shadow: 0 1rem 2rem -1rem rgba(0, 0, 0, 0.2);
    /* z-index: 1; */
    border-radius: 1rem;
    border: 1px solid var(--light);
  }
  .experience-group {
    text-align: center;
    padding: 2rem 2rem 3rem;
    h1 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    p {
      margin-bottom: 2rem;
    }
    .title {
      color: var(--main);
      margin-bottom: 0.5rem;
    }
  }
  .first {
    border-bottom: 1px solid var(--light);
  }
  .last {
    border-top: 1px solid var(--light);
  }
  .icon {
    font-size: 3.5rem;
    color: var(--main);
    margin: 1rem;
  }

  @media (min-width: 768px) {
    min-height: 670px;
    .experience-container {
      width: 80%;
      grid-template-columns: repeat(3, 1fr);
    }
    .first {
      border-right: 1px solid var(--light);
      border-bottom: none;
    }
    .last {
      border-left: 1px solid var(--light);
      border-top: none;
    }
  }

  @media (min-width: 1199px) {
    /* width: 90%; */
    min-height: 580px;
    .experience-container {
      width: 75%;
    }
  }
`
export default Experience
