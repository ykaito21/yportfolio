import React from "react"
import styled from "styled-components"
import avatar from "../../images/avatar.svg"
import { BannerButton } from "../Globals/Button"

function ContactForm() {
  return (
    <ContactFormWrapper>
      <div className="form-container">
        <img src={avatar} alt="avatar" />
        <h3>
          Thanks for contacting me. <br /> What can I do for you?
        </h3>
        <form action="https://formspree.io/ykaito21@gmail.com" method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              id="name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="form-control"
              rows="5"
              required
            />
          </div>
          <BannerButton className="submit-btn">submit</BannerButton>
        </form>
      </div>
    </ContactFormWrapper>
  )
}

const ContactFormWrapper = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  img {
    width: 88px;
    margin-top: -4rem;
  }
  h3 {
    font-weight: 400;
    padding: 4rem;
  }

  form {
    margin: auto;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    font-weight: 400;
    font-family: "eurostile", sans-serif;
    font-size: 1.2rem;
    color: rgba(41, 51, 71, 0.65);
  }
  input[type="text"],
  textarea {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    border: 1px solid var(--light);
    border-radius: 4px;
    color: var(--dark);
    font-size: 1.2rem;
    font-weight: 300;
  }
  .submit-btn {
    margin: 3rem 0 7rem 0;
  }

  @media (min-width: 768px) {
    form {
      width: 60%;
    }
  }
`

export default ContactForm
