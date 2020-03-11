import React, { Component } from "react"
import {
  // FaInstagram,
  FaTwitter,
  FaFacebook,
  // FaEnvelopeSquare,
  FaLinkedin,
} from "react-icons/fa"
import styled from "styled-components"
import { Link } from "gatsby"
import logo from "../../images/yk1-white.svg"

export class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        path: "https://www.facebook.com",
        icon: <FaFacebook className="icon" />,
      },
      {
        id: 2,
        path: "https://www.twitter.com",
        icon: <FaTwitter className="icon" />,
      },
      // {
      //   id: 3,
      //   path: "https://www.instagram.com",
      //   icon: <FaInstagram className="icon" />,
      // },
      {
        id: 4,
        path: "https://www.linkedin.com",
        icon: <FaLinkedin className="icon" />,
      },
      // {
      //   id: 5,
      //   path: "/contact",
      //   icon: <FaEnvelopeSquare className="icon email-icon" />,
      // },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="footer-content">
          <Link to="/" className="footer-logo">
            <img src={logo} alt="logo" />
          </Link>
          <h3 className="footer-text">Eat. Sleep. Code.</h3>
          <div className="icons">
            {this.state.icons.map(icon => {
              return (
                <a
                  href={icon.path}
                  key={icon.id}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {icon.icon}
                </a>
              )
            })}
          </div>
          <p className="copyright">
            Inspired by Matt Farley
            <br />
            Coded by Yuki &copy; {new Date().getFullYear().toString()}
          </p>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  height: auto;
  background: var(--main);
  padding: 1.5rem 0;
  .footer-content {
    width: 90%;
    margin: 10rem auto 2rem;
  }
  .footer-logo {
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 0.5rem;
    img {
      color: white;
    }
  }
  .footer-text {
    color: white;
    text-align: center;
    margin-bottom: 2rem;
    opacity: 0.7;
    font-size: 1.5rem;
  }
  .icons {
    display: flex;
    width: 10rem;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    font-size: 2rem;
    color: white;
    cursor: pointer;
    opacity: 0.9;
    &:hover {
      opacity: 1;
    }
  }
  .copyright {
    color: white;
    text-align: center;
    margin: 2rem;
    opacity: 0.7;
  }
`

export default Footer
