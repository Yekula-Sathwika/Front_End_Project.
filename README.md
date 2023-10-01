# Front_End_Project.
Creating an interactive quiz page using HTML, CSS, and JavaScript.

# Interactive Quiz

This is a simple interactive quiz page created using HTML, CSS, and JavaScript. It includes multiple-choice questions, answer options, and a scoring system. You can enhance it with additional features as needed.

## Running the Quiz

1. Clone or download this repository to your local machine.

2. Navigate to the directory where you have the quiz files (HTML, CSS, and JavaScript).

3. Open the `index.html` file in a web browser.

4. You should now see the quiz page with the first question displayed. Answer the questions and click the "Submit" button to check your answers. Click "Next" to proceed to the next question.

5. After completing all questions, your final score will be displayed.

## Additional Features (Optional)

### Timer

To add a timer to limit the time for answering each question, you can use JavaScript's `setTimeout` function. Here's how you can do it:

```javascript
// Add this code to the `loadQuestion` function to set a timer for each question (e.g., 30 seconds).
let timer;

function loadQuestion() {
    // ... (previous code)

    // Set a timer for 30 seconds for each question
    timer = setTimeout(() => {
        checkAnswer(); // Automatically check the answer when time's up
    }, 30000); // 30 seconds in milliseconds
}

function nextQuestion() {
    clearTimeout(timer); // Clear the timer when moving to the next question
    // ... (rest of the code)
}

