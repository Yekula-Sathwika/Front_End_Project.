const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the 'Red Planet'?",
        options: ["Mars", "Venus", "Earth", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Leo Tolstoy"],
        answer: "William Shakespeare"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        answer: "Carbon Dioxide"
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById('question-text');
const optionA = document.getElementById('optionA');
const optionB = document.getElementById('optionB');
const optionC = document.getElementById('optionC');
const optionD = document.getElementById('optionD');
const submitButton = document.getElementById('submit-button');
const nextButton = document.getElementById('next-button');
const feedback = document.getElementById('feedback');
const scoreDisplay = document.getElementById('score');

function loadQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    optionA.textContent = current.options[0];
    optionB.textContent = current.options[1];
    optionC.textContent = current.options[2];
    optionD.textContent = current.options[3];
    submitButton.disabled = false;
    nextButton.style.display = 'none';
    feedback.textContent = '';
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        feedback.textContent = "Please select an answer.";
        return;
    }
    const userAnswer = selectedOption.value;
    const correctAnswer = questions[currentQuestion].answer;
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct!";
        score++;
    } else {
        feedback.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
    }
    submitButton.disabled = true;
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionText.textContent = "Quiz completed!";
    optionA.style.display = 'none';
    optionB.style.display = 'none';
    optionC.style.display = 'none';
    optionD.style.display = 'none';
    submitButton.style.display = 'none';
    nextButton.style.display = 'none';
    feedback.textContent = `Your Score: ${score} / ${questions.length}`;
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;
}

loadQuestion();
submitButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', nextQuestion);
