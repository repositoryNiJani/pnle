// questions.js - Quiz Logic
//linking to the questions data
const QUIZ_DATA = window.QUIZ_DATA || [];

// Shuffle function (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the questions when the page loads
// This creates a new shuffled copy without modifying the original
const SHUFFLED_QUESTIONS = shuffleArray([...QUIZ_DATA]);

(function() {
    const total = SHUFFLED_QUESTIONS.length;
    let currentIndex = 0;
    const userAnswers = new Array(total).fill(-1);
    let quizCompleted = false;

    // DOM refs
    const qNumber = document.getElementById('qNumber');
    const qCategory = document.getElementById('qCategory');
    // const qRationale = document.getElementById('qRationale');
    const qText = document.getElementById('qText');
    const optionsContainer = document.getElementById('optionsContainer');
    const feedbackArea = document.getElementById('feedbackArea');
    const nextBtn = document.getElementById('nextBtn');
    const progressDisplay = document.getElementById('progressDisplay');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const answeredDisplay = document.getElementById('answeredDisplay');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalScore = document.getElementById('modalScore');
    const modalPercentage = document.getElementById('modalPercentage');
    const modalMessage = document.getElementById('modalMessage');
    const resetFromModalBtn = document.getElementById('resetFromModalBtn');

    function renderQuestion() {
        if (quizCompleted) return;

        const q = SHUFFLED_QUESTIONS[currentIndex];
        const idx = currentIndex;
        const selected = userAnswers[idx];

        qNumber.textContent = `Q${idx + 1}`;
        qCategory.textContent = q.category || 'General';
        qText.textContent = q.question;

        let html = '';
        const labels = ['A', 'B', 'C', 'D'];
        q.options.forEach((opt, i) => {
            let classes = 'option-item';
            if (selected !== -1) classes += ' disabled-opt';
            if (selected === i) classes += ' selected';
            if (selected !== -1) {
                if (i === q.correct) classes += ' correct-reveal';
                else if (selected === i && i !== q.correct) classes += ' wrong-reveal';
            }
            html += `<div class="${classes}" data-optindex="${i}">
                <span class="option-label">${labels[i] || ''}</span>
                <span class="option-text">${opt}</span>
            </div>`;
        });
        optionsContainer.innerHTML = html;

        // Disable/enable next button based on whether current question is answered
        if (selected === -1) {
            nextBtn.disabled = true;
            document.querySelectorAll('.option-item').forEach(el => {
                el.addEventListener('click', function(e) {
                    const optIdx = parseInt(this.dataset.optindex, 10);
                    handleOptionClick(optIdx);
                });
            });
        } else {
            nextBtn.disabled = false;
        }

        if (selected !== -1) {
            const isCorrect = (selected === q.correct);
            feedbackArea.innerHTML = `<span>${isCorrect ? ' Correct!' : ' Incorrect.'} The correct answer is ${q.options[q.correct]}<br><strong>Reasoning:</strong> ${q.rationale || 'No reasoning available.'}</span>`;
        } else {
            feedbackArea.innerHTML = `<span> Select an option to check your answer</span>`;
        }

        // Update Next button text
        if (currentIndex === total - 1) {
            nextBtn.textContent = 'Finish';
        } else {
            nextBtn.textContent = 'Next ▶';
        }

        updateStats();
    }

    function handleOptionClick(optIndex) {
        const idx = currentIndex;
        if (userAnswers[idx] !== -1) return;
        userAnswers[idx] = optIndex;
        renderQuestion();
    }

    function nextQuestion() {
        if (quizCompleted) return;

        const currentIdx = currentIndex;
        if (userAnswers[currentIdx] === -1) {
            feedbackArea.innerHTML = `<span> Please answer this question before proceeding.</span>`;
            return;
        }

        if (currentIndex < total - 1) {
            currentIndex++;
            renderQuestion();
        } else {
            const allAnswered = userAnswers.every(ans => ans !== -1);
            if (allAnswered) {
                completeQuiz();
            } else {
                feedbackArea.innerHTML = `<span>Please answer all questions before finishing.</span>`;
            }
        }
    }

    function completeQuiz() {
        quizCompleted = true;
        let correct = 0;
        let answered = 0;
        for (let i = 0; i < total; i++) {
            if (userAnswers[i] !== -1) {
                answered++;
                if (userAnswers[i] === SHUFFLED_QUESTIONS[i].correct) correct++;
            }
        }

        // Show modal
        const percentage = Math.round((correct / total) * 100);
        modalScore.textContent = `${correct}/${total}`;
        modalPercentage.textContent = `${percentage}%`;

        let message = '';
        if (percentage >= 90) message = 'Ang Galing! You\'re a pediatric nursing expert!';
        else if (percentage >= 75) message = 'Wow job! You have solid knowledge!';
        else if (percentage >= 60) message = 'Salamat sa effort! Review the topics you missed.';
        else message = ' Nag review kaba? You\'ll improve with practice.';
        modalMessage.textContent = message;

        modalOverlay.classList.add('active');
        nextBtn.disabled = true;

        updateStats();
    }

    function updateStats() {
        let correct = 0;
        let answered = 0;
        for (let i = 0; i < total; i++) {
            if (userAnswers[i] !== -1) {
                answered++;
                if (userAnswers[i] === SHUFFLED_QUESTIONS[i].correct) correct++;
            }
        }
        scoreDisplay.textContent = `${correct} correct`;
        answeredDisplay.textContent = `${answered} answered`;
        progressDisplay.textContent = `${Math.min(currentIndex + 1, total)} / ${total}`;
    }

    function resetQuiz() {
        // Reshuffle the questions when resetting
        const newShuffled = shuffleArray([...QUIZ_DATA]);
        SHUFFLED_QUESTIONS.length = 0;
        SHUFFLED_QUESTIONS.push(...newShuffled);
        
        for (let i = 0; i < total; i++) userAnswers[i] = -1;
        currentIndex = 0;
        quizCompleted = false;
        nextBtn.disabled = false;
        modalOverlay.classList.remove('active');
        renderQuestion();
    }

    // Event listeners
    nextBtn.addEventListener('click', nextQuestion);
    resetFromModalBtn.addEventListener('click', resetQuiz);

    // Initial render
    renderQuestion();
})();