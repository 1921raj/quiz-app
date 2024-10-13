const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [String],
      correctOption: { type: Number, required: true }, // 0-3 (index of the correct option)
    },
  ],
});

module.exports = mongoose.model('Quiz', QuizSchema);
