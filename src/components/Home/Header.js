import React from "react"
import styled from "styled-components"
import avatar from "../../images/avatar.svg"
import hero from "../../images/hero.svg"

function Header() {
  return (
    <HeaderWrapper>
      <div className="hero-container">
        <h1>Passionate Web Developer</h1>
        <h2>I love to learn, try, fail, and fix to improve my skill</h2>
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
      <img src={hero} alt="web-hero" className="hero" />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.header`
  height: 80vh;
  width: 90%;
  margin: 4rem auto 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1,
  h2 {
    margin-bottom: 2rem;
  }
  h2 {
    font-size: 1.4rem;
    font-weight: 300;
  }

  .avatar {
    width: 150px;
  }

  .hero {
    width: 100%;
  }

  @media (min-width: 768px) {
    height: 100vh;
    h1 {
      font-size: 3rem;
    }
    .avatar {
      width: 200px;
    }

    .hero {
      height: 40%;
    }
  }
`

export default Header
