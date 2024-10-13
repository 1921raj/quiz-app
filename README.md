
## Features

- User registration and login with JWT authentication
- Create, retrieve, and manage quizzes
- Multiple-choice questions with single correct answers
- View quiz results

## Technologies

- Node.js
- Express.js
- MongoDB (optional for database)
- JSON Web Tokens (JWT) for authentication

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/quiz-app.git
   cd online-quiz-app
Install dependencies:

bash
Copy code
npm install
Set environment variables:

Create a .env file in the root directory of the project and add the following variables:

plaintext
Copy code
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongodb://localhost:27017/test  # If using MongoDB
Run the application:

bash
Copy code
npm start
The application will run on http://localhost:port.

Usage
API Endpoints
User Authentication
Register a New User

Endpoint: POST /api/auth/register
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "password": "examplePassword"
}
Response: 201 Created with user details.
Login User

Endpoint: POST /api/auth/login
Request Body:
json
Copy code
{
  "username": "exampleUser",
  "password": "examplePassword"
}
Response: 200 OK with JWT token.
Quiz Management
Create a New Quiz

Endpoint: POST /api/quiz/
Headers:
plaintext
Copy code
Authorization: Bearer your_jwt_token
Content-Type: application/json
Request Body:
json
Copy code
{
  "title": "General Knowledge Quiz",
  "questions": [
    {
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "correctOption": 2
    },
    {
      "question": "Which planet is known as the Red Planet?",
      "options": ["Earth", "Mars", "Jupiter", "Saturn"],
      "correctOption": 1
    }
  ]
}
Response: 201 Created with quiz details.
Get All Quizzes

Endpoint: GET /api/quiz/
Headers:
plaintext
Copy code
Authorization: Bearer your_jwt_token
Response: 200 OK with a list of quizzes.
Get Quiz Details

Endpoint: GET /api/quiz/:quizId
Headers:
plaintext
Copy code
Authorization: Bearer your_jwt_token
Response: 200 OK with quiz details.
Take a Quiz

Endpoint: POST /api/quiz/:quizId/take
Headers:
plaintext
Copy code
Authorization: Bearer your_jwt_token
Content-Type: application/json
Request Body:
json
Copy code
{
  "answers": [2, 1]  // Array of selected options
}
Response: 200 OK with quiz results.
View Quiz Results

Endpoint: GET /api/quiz/:quizId/results
Headers:
plaintext
Copy code
Authorization: Bearer your_jwt_token
Response: 200 OK with results of the quiz.
Contributing
	 