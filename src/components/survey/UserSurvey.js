import React, { useEffect, useState } from "react";
import styled from "styled-components";
import QuestionHeader from "./QuestionHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";
import axios from "axios";

const UserSurvey = () => {
  const items = JSON.parse(localStorage.getItem('theOptionSelected'));

  let [questionPage, setQuestionPage] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(items || []);


  let [current, setCurrent] = useState({})

  
  console.log(current);
  


  useEffect(() => {
    const getSurvey = async () => {
      const url = "http://api.baremind.co.za/api/survey";
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);

      setQuestions(data);
      setCurrent(data[questionPage])
    };
    getSurvey();
  }, []);

  const handleButton = (type) => {
      let totalPages = questions.length -1
      if(type === 'prev'){
        if(questionPage > 0){
           questionPage--
            setQuestionPage(questionPage)
            setCurrent(questions[questionPage])
        }
        

      }

      if(type === 'next'){
        if(questionPage < totalPages){

            questionPage ++
            setQuestionPage(questionPage)
            setCurrent(questions[questionPage])
            console.log(questionPage)
            console.log(totalPages)
        }
      
      }
  }


  const handleSubmitData = () => {

      // then we can now send to the api
      let answers = selectedOptions
      axios.post('http://api.baremind.co.za/api/survey/answer', {data:answers}).then((res) => {
        console.log(res.data)
        window.location.href = "/surveyend"
        localStorage.clear();
      }).catch(err => {
        console.log(err.response.data)
      })

    
    
  }
  

  const handleTheSelectedOption = (e) => {
      
     let checkedOne = [...selectedOptions]
    

         if (e.target.checked) {
          setSelectedOptions([...selectedOptions, {id:current.questionN, option:e.target.value}])

        }else{

          let indexTarget = checkedOne.findIndex(item => {
            return item.option === e.target.value
         })

          setSelectedOptions(checkedOne.filter((itemMi,indexFiltered) => indexFiltered !== indexTarget))

          
         }
        

         localStorage.setItem('theOptionSelected', JSON.stringify(selectedOptions));

      
  }


const handleProgressBar = (numberOfCurrentPage) => {
  switch (numberOfCurrentPage) {
      case 0:
        return questionPage + 10
      case 1:
        return questionPage * 20
      case 2:
        return questionPage * 15
      case 3:
        return 20 + 20
      case 4:
        return 20 + 30
      case 5:
        return questionPage * 12
      case 6:
        return 40 + 30
      case 7:
        return 40 + 40
      case 8:
        return 40 + 50
      case 9:
          return 50 + 50

      default:
        break;
  }
}



  return (
    <Container>
      <div>
        <QuestionHeader />
      </div>
      <Main>
        <ContentHolder>
          <GetStarted>
            Getting started 
           
          </GetStarted>
          <QuestionHolder>{current?.question}</QuestionHolder>


          <OptionHolder>
      
      {/* map through the current option */}
              {current?.options && current.options.map((option, idx) => {
                

                const optionFiltered = selectedOptions.filter((item) => item.option === option)

                 return( <Option key={current.questionN + idx}>
                    <input
                      type="checkbox"
                      class="btn-check"
                      id={`btn-check-${current.questionN + idx}-outlined`}
                      value={option}
                     name={`option${current.questionN}`} 
                     onChange={handleTheSelectedOption}
                     checked = {optionFiltered.length > 0 && true }
                    />
                    <label
                      class="btn btn-outline-secondary"
                      htmlFor={`btn-check-${current.questionN + idx}-outlined`}
                    >
                              {option}
                    </label>
                  
                  </Option>)
})}
          </OptionHolder>

         
        </ContentHolder>
      </Main>

      <ProgressiveBar>
        <ProgressiveBarHolder>
          <PrevHolder>
            <Button
              className="btnPrev"
              sx={{ borderRadius: "6px" }}
              onClick={() =>handleButton('prev')}
            >
              <ArrowBackIcon style={{ color: "#386DE8" }} />
            </Button>
          </PrevHolder>
          <progress id="file" value={handleProgressBar(questionPage)} max="100">
            {" "}
            32%{" "}
          </progress>

          <NextHolder>
            {questionPage === questions.length - 1 
            ? <Button
              className="btnNext"
              sx={{ backgroundColor: "#09CF83", borderRadius: "6px" }}
              onClick={handleSubmitData}

            >
              Submit
            </Button>
             : <Button
              className="btnNext"
              sx={{ backgroundColor: "#09CF83", borderRadius: "6px" }}
              onClick={() => handleButton('next')}
            >
              <ArrowForwardIcon className="arrowForward" />
            </Button> }
          </NextHolder>
        </ProgressiveBarHolder>
      </ProgressiveBar>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
`;
const Main = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ContentHolder = styled.div`
  width: 50vw;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const GetStarted = styled.p`
  font-family: "DM Sans";
  font-size: 18px;
  color: #787878;

  @media (max-width: 912px) and (min-width: 375px) {
    font-size: 12px;
  }
`;

const QuestionHolder = styled.p`
font-family: "DM Sans";
font-weight: 700;
  font-size: 38px;
  line-height: 50px;
  letter-spacing: -0.005em;
  color: #032735;
  text-align: center;

  @media (max-width: 912px) and (min-width: 375px) {
    font-size: 13px;
    line-height: 13px;
    text-align: center;
    font-weight: 600;
  }
`;

const OptionHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 3em;
  margin-bottom: 10px;

  
  @media (max-width: 912px) and (min-width: 375px) {
    display: flex;
    flex-direction: column;
    min-height:auto;

  }
`;

const Option = styled.div`
  label {
    width: 220px;
    box-sizing: border-box;
    background: #ffffff;
    box-shadow: 0px 19px 40px rgba(224, 224, 224, 0.25);
    border-radius: 5px;
    text-align: start;
    font-size: 0.8em;

    @media (max-width: 912px) and (min-width: 375px) {
      font-size: 0.3em;
      width: 200px;
    }
  }
`;

const ProgressiveBar = styled.div`
  width: 100vw;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const ProgressiveBarHolder = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  progress {
    width: 75%;
  }
`;

const PrevHolder = styled.div`
  .btnPrev {
    &:hover {
      border: 2px solid #09cf83;
    }
  }
`;

const NextHolder = styled.div`
  .btnNext {
    &:hover {
      border: 2px solid #09cf83;
    }
  }

  .arrowForward {
    color: white;

    &:hover {
      color: #386de8;
    }
  }
`;

export default UserSurvey