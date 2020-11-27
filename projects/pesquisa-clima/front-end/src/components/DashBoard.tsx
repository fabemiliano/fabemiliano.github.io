import React, { useEffect, useState, PureComponent } from 'react';
import { Text } from '../styled-components/styles';
import axios from 'axios';
import Example from './Charts';


function getAllUserAnswers(setUserAnswers: any): void {
  axios.get('http://localhost:3001/allanswers').then(({ data }) => setUserAnswers(data));
}
function getAnswersById(setAnswers: any): void {
  axios.get('http://localhost:3001/answers').then(({ data }) => setAnswers(data));
}
function getAllQuestions(setAnswers: any): void {
  axios.get('http://localhost:3001/allquestions').then(({ data }) => setAnswers(data));
}

function DashBoard() {
  const [userAnswers, setUserAnswers] = useState<[]>([]);
  const [answers, setAnswers] = useState<[]>([]);
  const [questions, setQuestions] = useState<[]>([]);
  // useEffect(() => {
  //   getAllUserAnswers(setUserAnswers);
  //   getAnswersById(setAnswers);
  //   getAllQuestions(setQuestions);
  // }, [answers, userAnswers, questions]);
  // console.log(userAnswers, answers, questions);
  return (
    <div>
      DashBoard
      {/* {questions.map(({ question }) => <div> */}
        {/* <Text color="#fff">{question}</Text> */}
        <div><Example/></div>
      {/* </div>)} */}
    </div>
  );
}

export default DashBoard;
