import React from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'

const SurveyEnd = () => {
  return (
    <Container>
      <Main>
        <ContentHolder>

                <LogoHolder>
                <img src="image/thereallogo.png" alt="logohead"/>

                </LogoHolder>

                <YogaImageHolder>
                        <img src="image/yogaimage.png" alt='baremind-yoga' />
                </YogaImageHolder>

                <ThankYouMessage>
                        Thank you for <br/>your feedback! 
                </ThankYouMessage>

                <Content1>
                Get ready for the official launch of the app!!
                    We look forward to helping you become your best self from the inside out!
                </Content1>

                <DashboardReturn>
                  <LinkToDashBoard to="/">Return to Dashboard</LinkToDashBoard>
                </DashboardReturn>
        </ContentHolder> 
      </Main>

    </Container>
  )
}


const Container = styled.div`
width:100%;
height:100vh;
background:white;
display:flex;
justify-content:center;
align-items:center;
`;

const Main = styled.div`

  width:98%;
  height:96%;
  background:#F8F8F7;
  border-radius:10px;
  display:flex;
  justify-content:center;
  align-items:center;


`;

const ContentHolder = styled.div`

width:50%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
margin-bottom:30px;

`;

const LogoHolder = styled.div`
    margin-top:20px;
    img{
      width:70px;
      height:70px;
     }
`;

const YogaImageHolder = styled.div`

img{
    width:300px;
    height:200px;
    object-fit:cover;
    margin:20px 0 30px 0;

}
`;

const ThankYouMessage = styled.div`
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 40px;
line-height: 40px;
text-align: center;
color: #0F3949;
margin:20px 0 40px 0;

@media (max-width: 912px) and (min-width: 375px) {
  font-size: 30px;
  line-height: 25px;

}
`;

const Content1 = styled.div`
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;

color: #979797;
margin-bottom:1em;
`;


const DashboardReturn = styled.div`

background-color:#1c78cd;
border-radius:5px;
padding:0.6em 1em 0.6em 1em;


`;


const LinkToDashBoard = styled(Link)`

text-decoration:none;
color:white;


`;


export default SurveyEnd