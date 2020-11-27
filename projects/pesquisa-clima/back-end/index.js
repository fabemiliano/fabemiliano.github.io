const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const login = require('./controllers/login')
const questions = require('./controllers/questions')
const answers = require('./controllers/answers')
const numberOfQuestions = require('./controllers/numberOfQuestions')
const saveUserAnswers = require('./controllers/saveUserAnswers')
const getAllAnswers = require('./controllers/getAllAnswers')
const getAllAnswersName = require('./controllers/getAllAnswersName')
const getAllQuestions = require('./controllers/getAllQuestions')

app.use(cors())
app.use(bodyParser.json());

app.post('/login', login);
app.get('/questions', numberOfQuestions);
app.get('/allquestions', getAllQuestions);
app.get('/questions/:id', questions);
app.get('/answers/:id', answers);
app.put('/answers', saveUserAnswers);
app.get('/answers', getAllAnswersName);
app.get('/allanswers', getAllAnswers);


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => `Ouvindo na porta ${PORT}`);
