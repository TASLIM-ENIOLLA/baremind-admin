import React from 'react'
import styled from 'styled-components'

const QuestionHeader = () => {
  return (
    <Container>
          <img src="image/thereallogo.png" alt="logohead"/>

    </Container>
  )
}


const Container = styled.div`
    width:100%;
    min-height:15%;

    img{
        margin-top:1.8rem;
        margin-left:5rem;
        width:70px;
        height:70px;
    }
`;

export default QuestionHeader