import React from "react"
import styled from "styled-components"
import img from "../../images/404.svg"

function NoPage() {
  return (
    <NoPageWrapper>
      <h1>PAGE NOT FOUND</h1>
      <img src={img} alt="not found" style={{ height: "50vh", width: "50%" }} />
      <p>
        You just hit a route that doesn&#39;t exist...
        <br />
        Please check your route!
      </p>
    </NoPageWrapper>
  )
}

const NoPageWrapper = styled.div`
  padding: 2rem;
  text-align: center;
`

export default NoPage
