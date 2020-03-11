import styled from "styled-components"

const BannerButton = styled.button`
  display: block;
  color: var(--main);
  background: transparent;
  text-transform: capitalize;
  border: 2px solid var(--main);
  padding: 0.5rem 1rem;
  border-radius: 1.8rem;
  font-size: 1.25rem;
  cursor: pointer;
  &:hover {
    background: var(--main);
    color: white;
  }
  &:focus {
    outline: none;
  }
`

export { BannerButton }
