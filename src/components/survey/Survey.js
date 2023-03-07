import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom'
import { Alert, ListItemSecondaryAction } from '@mui/material';
import { CoPresentOutlined } from '@mui/icons-material';
import axios from 'axios';

const Survey = () => {

  const [terms, setTerms] = useState(false);

  const handleChange = (e) => {
    if (e.target.checked) {
      setTerms(!terms)
    } else {
      setTerms(false)
    }
  
  };

  const [questionz, setQuestionz] = useState("");

  const fetchData = () => {
      axios.get('https://api.baremind.co.za/api/survey')
      .then(res => {

        console.log(res)
        setQuestionz(res.data)

      }).catch((err) => {
          
          console.log(err)
      })
  }






  return (
    <Container>
      <Main>
          <ContentHolder>
              <LogoHolder>

              <img src="image/thereallogo.png" alt="logohead"/>
              </LogoHolder>

              <Header>Welcome to Bare Mind</Header>

              <InnerContentHolder>
              <Content1>
              Please fill in the following questionnaire to help us personalise this experience for you.
              </Content1>
              <Content2>
              We are currently in development and we would love it if you would consider giving us your input.
              </Content2>
              </InnerContentHolder>
   
              <ButtonHolder>

              <PrivacyAcceptance class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handleChange} />
                    <label class="form-check-label" for="flexCheckDefault">
                      Accept Terms & Conditions
                    </label>
                  </PrivacyAcceptance>

         

            <Button1>
                  <ContinueLink to={terms && "/questionBegin"}>Continue</ContinueLink>
                </Button1>
                
               
              
              </ButtonHolder>
            
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

 

`;

const ContentHolder = styled.div`

width:50%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;




`;

const LogoHolder = styled.div`
 
  margin-top:30px;
  display:flex;
  flex-direction:column;
  cursor:pointer;

  img{
    width:70px;
    height:70px;
   }
`;

const Header = styled.h1`
margin-top:30px;
color:#0F3949;
font-family: sans-serif;
font-weight: 700;
font-size:3.5em;
text-align:center;



  @media(max-width:675px){
    font-size:1.5em;

  }
`;

const InnerContentHolder = styled.div`
margin-top:30px;
padding:30px;
text-align:center;
color:#979797;


`;
const Content1 = styled.p`
padding-bottom:20px;
font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 27px;

@media(max-width:1024px){
  font-size: 15px;
  padding-bottom:10px;

  }
  
@media(max-width:675px){
  font-size: 11px;
  line-height: 20px;

  }

  @media(min-width:375px){
    line-height: 20px;

    }
`;

const Content2 = styled.p`
padding-bottom:20px;
font-family: sans-serif;
font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 27px;

@media(max-width:1024px){
  font-size: 15px;
  padding-bottom:5px;

  }

@media(max-width:675px){
  font-size: 11px;
  line-height: 20px;

  }

  @media(min-width:375px){
    line-height: 20px;

    }
`;

const ButtonHolder = styled.div`
  display:flex;
  flex-direction:column;
 margin-top:-20px;
`;

const Button1 = styled.button`

width:18rem;
height:2.5rem;
margin-bottom:10px;
background:#09CF83;
border:none;
border-radius:6px;
color:#FFFFFF;
cursor:pointer;


@media(max-width:675px){
  width:10rem;
height:2.5rem;
  
  }

`;

const ContinueLink = styled(Link)`
  text-decoration:none;
`;


const PrivacyAcceptance = styled.div`
width:18rem;
height:2.5rem;
display:flex;
justify-content:center;
align-items:center;

@media(max-width:675px){
  width:10rem;
height:2.5rem;
  
  }

  label{
    padding-left:0.8em;
    padding-top:0.3em;
  }
`;

export default Survey