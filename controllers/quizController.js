const Quiz = require('../models/Quiz');

// Create quiz
exports.createQuiz = async (req, res) => {
  const { title, questions } = req.body;
  try {
    const quiz = new Quiz({ title, questions });
    await quiz.save();
    res.status(201).json({ message: 'Quiz created successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all quizzes
exports.getQuizzes = async (req, res) => {
  try {
    const quizzes = await Quiz.find();
    res.json(quizzes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get quiz details by ID
exports.getQuizDetails = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Submit quiz and calculate result
exports.submitQuiz = async (req, res) => {
  const { answers } = req.body; // answers as [0, 2, 1] (index of the selected option for each question)

  if(!Array.isArray(answers))
  {
    return res.status(400).json({message: 'Answer is not an array'});
  }
  try {
    const quiz = await Quiz.findById(req.params.id);
    let score = 0;

    quiz.questions.forEach((question, idx) => {
      if (question.correctOption === answers[idx]) score++;
    });

    res.json({ score, total: quiz.questions.length });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
