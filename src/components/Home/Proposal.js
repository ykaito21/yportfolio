import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { BannerButton } from "../Globals/Button"
import { FaPaperPlane } from "react-icons/fa"

function Proposal() {
  return (
    <ProposalWrapper>
      <div className="proposal-container">
        <h3>Start our project</h3>
        <p>
          Interested in woking with me? <br /> Let's start something together!
        </p>
        <Link to="/contact">
          <BannerButton className="proposal-btn">
            <span>start </span>
            <FaPaperPlane className="icon" />
          </BannerButton>
        </Link>
      </div>
    </ProposalWrapper>
  )
}

const ProposalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  .proposal-container {
    padding: 2rem 0 1.5rem;
    position: absolute;
    background: var(--dark);
    width: 90%;
    min-height: 200px;
    height: auto;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 1rem;
    h3 {
      color: white;
      display: block;
      padding: 0 1rem;
      margin-bottom: 0.5rem;
    }
    p {
      color: white;
      display: block;
      padding: 0 1rem;
      font-size: 1.2rem;
      opacity: 0.7;
      margin: 1rem;
    }
    .proposal-btn {
      color: white;
      padding: 0.5rem 1.5rem;
      margin: 1rem;
    }
    .icon {
      vertical-align: text-top;
    }
  }

  @media (min-width: 768px) {
    .proposal-container {
      width: 80%;
    }
  }

  @media (min-width: 1199px) {
    .proposal-container {
      width: 75%;
      flex-direction: row;
    }
  }
`

export default Proposal
