let questionElement = document.getElementById('question');
let answerButtons = document.getElementById('options');
let nextBtn = document.getElementById('next-btn');
let preBtn = document.getElementById('pre-btn');
let restartBtn = document.getElementById('restart-btn');
let currentQuestionNumber = document.getElementById('current-question-number');

let score = 0;
let currentQuestionIndex = 0;
let scoreArray = [];

let questions = [
    {
        question: 'What is the purpose of agar in microbial culture media?',
        answers: [
            {text: 'Nutrient source', correct: false},
            {text: 'pH indicator', correct: false},
            {text: 'Solidifying agent', correct: true},
            {text: 'Antibiotic', correct: false},
        ]
    },
    {
        question: 'Which microbial culture technique is used to obtain isolated colonies?',
        answers: [
            {text: 'Streak plate method', correct: true},
            {text: 'Pour plate method', correct: false},
            {text: 'Spread plate method', correct: false},
            {text: 'Agar slant method', correct: false},
        ]
    },
    {
        question: 'What is the optimal temperature for the growth of most human pathogens in culture?',
        answers: [
            {text: '4°C', correct: false},
            {text: '25°C', correct: false},
            {text: '37°C', correct: true},
            {text: '55°C', correct: false},
        ]
    },
    {
        question: 'Which type of media inhibits the growth of certain microbes while allowing others to thrive?',
        answers: [
            {text: 'Selective media', correct: true},
            {text: 'Differential media', correct: false},
            {text: 'Enriched media', correct: false},
            {text: 'Basal media', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a Durham tube in a microbial culture test?',
        answers: [
            {text: 'Measure pH', correct: false},
            {text: 'Detect gas production', correct: true},
            {text: 'Determine temperature', correct: false},
            {text: 'Assess turbidity', correct: false},
        ]
    },
    {
        question: 'Which microbial culture method involves the use of a Petri dish with a layer of agar on the surface?',
        answers: [
            {text: 'Slant culture', correct: false},
            {text: 'Deep culture', correct: false},
            {text: 'Plate culture', correct: true},
            {text: 'Broth culture', correct: false},
        ]
    },
    {
        question: 'In microbial culture, what is the purpose of an inoculation loop?',
        answers: [
            {text: 'Measure temperature', correct: false},
            {text: 'Transfer microorganisms', correct: true},
            {text: 'Monitor pH', correct: false},
            {text: 'Indicate oxygen levels', correct: false},
        ]
    },
    {
        question: 'Which type of media is used to differentiate between bacteria based on their ability to ferment carbohydrates?',
        answers: [
            {text: 'Selective media', correct: false},
            {text: 'Enriched media', correct: false},
            {text: 'Differential med', correct: true},
            {text: 'Basal media', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a streak plate method in microbial culture?',
        answers: [
            {text: 'Obtain isolated colonies', correct: true},
            {text: 'Measure growth rate', correct: false},
            {text: 'Determine pH', correct: false},
            {text: 'Assess turbidity', correct: false},
        ]
    },
    {
        question: 'Which gas is commonly used to create anaerobic conditions in microbial culture?',
        answers: [
            {text: 'Oxygen', correct: false},
            {text: 'Nitrogen', correct: false},
            {text: 'Carbon dioxide', correct: false},
            {text: 'Hydrogen', correct: true},
        ]
    },
    {
        question: 'Which microbial culture technique involves diluting a liquid sample and spreading it over the surface of an agar plate?',
        answers: [
            {text: 'Streak plate method', correct: false},
            {text: 'Pour plate method', correct: false},
            {text: 'Spread plate method', correct: true},
            {text: 'Agar slant method', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a broth culture in microbial testing?',
        answers: [
            {text: 'Assess colony morphology', correct: false},
            {text: 'Obtain isolated colonies', correct: false},
            {text: 'Measure turbidity', correct: true},
            {text: 'Determine pH', correct: false},
        ]
    },
    {
        question: 'Which type of media supports the growth of a wide range of microorganisms without any selective or inhibitory properties?',
        answers: [
            {text: 'Selective media', correct: false},
            {text: 'Differential media', correct: false},
            {text: 'Enriched media', correct: false},
            {text: 'Basal media', correct: true},
        ]
    },
    {
        question: 'What does the term “aseptic technique” refer to in microbial culture?',
        answers: [
            {text: 'Preventing contamination', correct: true},
            {text: 'Measuring temperature', correct: false},
            {text: 'Assessing pH', correct: false},
            {text: 'Enhancing oxygen levels', correct: false},
        ]
    },
    {
        question: 'Which microbial culture method involves growing microorganisms on the surface of a solid medium at a slant?',
        answers: [
            {text: 'Slant culture', correct: true},
            {text: 'Deep culture', correct: false},
            {text: 'Plate culture', correct: false},
            {text: 'Broth culture', correct: false},
        ]
    },
    {
        question: 'In microbial culture, what does the term “colony-forming unit (CFU)” represent?',
        answers: [
            {text: 'Measure of temperature', correct: false},
            {text: 'Unit of acidity', correct: false},
            {text: 'Viable microorganisms', correct: true},
            {text: 'pH indicator', correct: false},
        ]
    },
    {
        question: 'What is the purpose of an enrichment culture in microbiology?',
        answers: [
            {text: 'Measure oxygen levels', correct: false},
            {text: 'Increase pH', correct: false},
            {text: 'Promote the growth of specific microorganisms', correct: true},
            {text: 'Assess colony morphology', correct: false},
        ]
    },
    {
        question: 'Which microbial culture method involves growing microorganisms in a liquid medium with a high concentration of nutrients?',
        answers: [
            {text: 'Streak plate method', correct: false},
            {text: 'Pour plate method', correct: false},
            {text: 'Broth culture', correct: true},
            {text: 'Agar slant method', correct: false},
        ]
    },
    {
        question: 'Which type of media allows for the growth of a particular microorganism while inhibiting the growth of others?',
        answers: [
            {text: 'Selective media', correct: true},
            {text: 'Differential media', correct: false},
            {text: 'Enriched media', correct: false},
            {text: 'Basal media', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a spectrophotometer in microbial culture studies?',
        answers: [
            {text: 'Measure temperature', correct: false},
            {text: 'Assess pH', correct: false},
            {text: 'Quantify microbial growth', correct: true},
            {text: 'Indicate gas production', correct: false},
        ]
    }
]

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    scoreArray = [];
    currentQuestionNumber.innerHTML = (currentQuestionIndex + 1) + '/' + questions.length;
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + '. ' + currentQuestion.question;

    currentQuestion.answers.forEach(option =>{
        const button = document.createElement('button');
        button.classList.add('btn');
        button.innerHTML = option.text;
        answerButtons.appendChild(button);
        if (option.correct){
            button.dataset.correct = 'true';
        }
        button.addEventListener('click', selectAnswer);
    })
}

function resetState(){
    nextBtn.style.display = 'block';
    preBtn.style.display = 'block';
    restartBtn.style.display = 'none';
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedOption = e.target;
    const isCorrect = selectedOption.dataset.correct === 'true';
    if (isCorrect){
        selectedOption.classList.add('correct');
        scoreArray.push(1);
    } else{
        selectedOption.classList.add('incorrect');
        scoreArray.push(0);
    }
    Array.from(answerButtons.children).forEach(button =>{
        if (button.dataset.correct){
            button.classList.add('correct');

        }
        button.disabled = true;
    })
    nextBtn.style.display = 'block';
    preBtn.style.display = 'block';
}
nextBtn.addEventListener('click', ()=>{
    prevScore = score;
    currentQuestionIndex++;
    currentQuestionNumber.innerHTML = (currentQuestionIndex + 1) + '/' + questions.length;
    if (currentQuestionIndex < questions.length){
        showQuestion();
    } else{
        currentQuestionNumber.innerHTML = ' ';
        showScore();
    }
})

function showScore(){
    resetState();
    preBtn.style.display = 'none';
    nextBtn.style.display = 'none';
    scoreArray.forEach(item =>{
        console.log(item);
        if (item == 1){
            score++;
        }
    })
    questionElement.innerHTML = `You scored ${score} out ${questions.length}!`;
    restartBtn.style.display = 'block';
}

restartBtn.addEventListener('click', ()=>{
    startQuiz();
})

preBtn.addEventListener('click', ()=>{
    if (currentQuestionIndex <= 0){
        alert('Cannot go back beyond the first question!');
        return
    } else{
        scoreArray.pop();
        scoreArray.pop();
        currentQuestionIndex--;
        currentQuestionNumber.innerHTML = (currentQuestionIndex + 1) + '/' + questions.length;
        
        showQuestion();
    }
})

startQuiz();
