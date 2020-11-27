import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: 'Page A', answers: 2,
  },
  {
    name: 'Page B', answers: 3,
  },
];


function getAllUserAnswers(setUserAnswers: any): void {
  axios.get('http://localhost:3001/allanswers').then(({ data }) => setUserAnswers(data));
}
function getAnswersById(setAnswers: any): void {
  axios.get('http://localhost:3001/answers').then(({ data }) => setAnswers(data));
}
function getAllQuestions(setAnswers: any): void {
  axios.get('http://localhost:3001/allquestions').then(({ data }) => setAnswers(data));
}

function transformData(answers: [], userAnswers: []) {
  const answersFull = answers.filter(({ questionId }) => questionId === 1).map(({ answer }) => answer);
  const answersid = answers.filter(({ questionId }) => questionId === 1).map(({ id }) => id);
  const answered = userAnswers.map(({ q1 }) => q1);
  console.log(answered)
}

function Example() {
  const [userAnswers, setUserAnswers] = useState<[]>([]);
  const [answers, setAnswers] = useState<[]>([]);
  const [questions, setQuestions] = useState<[]>([]);

  useEffect(() => {
    getAllUserAnswers(setUserAnswers);
    getAnswersById(setAnswers);
    getAllQuestions(setQuestions);
  }, []);
  useEffect(() => {
    transformData(answers, userAnswers);
  }, [answers, userAnswers]);

  return (
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5, right: 30, left: 20, bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey='answers' fill='#82ca9d' />
    </BarChart>
  );
}

export default Example;
