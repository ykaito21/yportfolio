import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/yk1.svg"
import { BannerButton } from "./Button"
import { FaHandPeace } from "react-icons/fa"

function Navbar() {
  return (
    <NavWrapper>
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="contact">
        <Link to="/contact">
          <BannerButton type="button">
            <span>hi </span>
            <FaHandPeace className="icon" />
          </BannerButton>
        </Link>
      </div>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  height: 88px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  .icon {
    vertical-align: text-top;
  }
`

export default Navbar
