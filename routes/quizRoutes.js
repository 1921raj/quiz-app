const express = require('express');
const { createQuiz, getQuizzes, getQuizDetails, submitQuiz } = require('../controllers/quizController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createQuiz);
router.get('/', getQuizzes);
router.get('/:id', getQuizDetails);
router.post('/:id/submit', submitQuiz);

module.exports = router;
