import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ApplicationContext } from '../context/context';
import { QuestionCenterColumnDiv, Title, SmallButtons } from '../styled-components/styles';
import { useHistory } from 'react-router-dom';


function getQuestion(questionId: number, setQuestion: any, setQuestionType: any): void {
  if (questionId < 6) {
    axios.get(`http://localhost:3001/questions/${questionId}`)
      .then(({ data: { question, type } }) => { setQuestion(question); setQuestionType(type); });
  }
}
function getNumberOfQuestions(setNumberOfQuestions: any): void {
  axios.get('http://localhost:3001/questions').then(({ data }) => setNumberOfQuestions(data));
  // return numberOfQuestions
}

function getAnswers(questionId: number, setAnswer: any): void {
  if (questionId < 6) {
    axios.get(`http://localhost:3001/answers/${questionId}`)
      .then(({ data }) => { setAnswer(data); });
  }
}

function saveAnswer(id: number, questionId: number, userAnswers: [], setUserAnswers: any): void {
  setUserAnswers([...userAnswers, id]);
}
function saveOpenAnswer(answer: string, userAnswers: [], setUserAnswers: any): void {
  setUserAnswers([...userAnswers, answer]);
}

function saveAnswerInDB(userAnswers: {}): void {
  axios.put(`http://localhost:3001/answers`, { userAnswers }).then(() => console.log('foi chamado'));
}

function renderChoices(answers: [], setQuestionID: any, questionId: number, userAnswers: [], setUserAnswers: any, numberOfQuestions: number, history: any) {
  return (
    <div>
      <QuestionCenterColumnDiv height='80'>
        {answers.map(({ answer, id }) => <div>
          <button onClick={() => {
            saveAnswer(id, questionId, userAnswers, setUserAnswers);
            setQuestionID((questionId: number) => questionId + 1);
          }}>{answer}</button></div>)}
        {(questionId > 1) && <SmallButtons onClick={() => setQuestionID((questionId: number) => questionId - 1)}>Voltar</SmallButtons>}
        {(questionId > numberOfQuestions) && history.push('/thanksScreen')}
      </QuestionCenterColumnDiv>
    </div>
  );
}
function renderOpenAnswer(openAnswer: string, setOpenAnswer: any, setQuestionID: any, questionId: number, userAnswers: [], setUserAnswers: any, numberOfQuestions: number, history: any) {
  return (
    <div>
      <QuestionCenterColumnDiv height='80'>
        <div>
          <input onChange={(e) => setOpenAnswer(e.target.value)} value={openAnswer} />
          <SmallButtons onClick={() => {
            saveOpenAnswer(openAnswer, userAnswers, setUserAnswers);
            setQuestionID((questionId: number) => questionId + 1);
          }}>Próxima</SmallButtons>
        </div>
        {(questionId > 1) && <SmallButtons onClick={() => setQuestionID((questionId: number) => questionId - 1)}>Voltar</SmallButtons>}
        {(questionId > numberOfQuestions) && history.push('/thanksScreen')}
      </QuestionCenterColumnDiv>
    </div>
  );
}

function Questions() {
  const [questionId, setQuestionID] = useState(1);
  const [question, setQuestion] = useState('');
  const [questionType, setQuestionType] = useState('');
  const [answers, setAnswer] = useState<[]>([]);
  const [openAnswer, setOpenAnswer] = useState<string>('');
  const { userAnswers, setUserAnswers } = useContext(ApplicationContext);
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>(1);
  const history = useHistory();

  useEffect(() => {
    getQuestion(questionId, setQuestion, setQuestionType);
    getAnswers(questionId, setAnswer);
    getNumberOfQuestions(setNumberOfQuestions);
    if (questionId > numberOfQuestions) { saveAnswerInDB(userAnswers); }
  }, [questionId, numberOfQuestions, userAnswers]);
  return (
    <div>
      <Title color='#fff'>{`Pergunta ${questionId} de ${numberOfQuestions}`}</Title>
      <Title color='#fff'>{question}</Title>
      {(questionType === 'multiple') && renderChoices(answers, setQuestionID, questionId, userAnswers, setUserAnswers, numberOfQuestions, history)}
      {(questionType === 'open') && renderOpenAnswer(openAnswer, setOpenAnswer, setQuestionID, questionId, userAnswers, setUserAnswers, numberOfQuestions, history)}
    </div>
  );
}

export default Questions;
