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
        question: 'Which type of immune cell is responsible for antibody production in microbial immunology?',
        answers: [
            {text: 'T lymphocyte', correct: false},
            {text: 'B lymphocyte', correct: true},
            {text: 'Natural killer cell', correct: false},
            {text: 'Macrophage', correct: false},
        ]
    },
    {
        question: 'What is the primary function of antibodies in the immune response?',
        answers: [
            {text: 'Phagocytosis', correct: false},
            {text: 'Cytotoxicity', correct: false},
            {text: 'Antigen recognition', correct: true},
            {text: 'Inflammation', correct: false},
        ]
    },
    {
        question: 'Which immunoglobulin is involved in allergic reactions and defense against parasites?',
        answers: [
            {text: 'IgA', correct: false},
            {text: 'IgE', correct: true},
            {text: 'IgG', correct: false},
            {text: 'IgM', correct: false},
        ]
    },
    {
        question: 'What is the process by which immune cells engulf and digest pathogens in microbial immunology?',
        answers: [
            {text: 'Opsonization', correct: false},
            {text: 'Phagocytosis', correct: true},
            {text: 'Antibody neutralization', correct: false},
            {text: 'Complement activation', correct: false},
        ]
    },
    {
        question: 'WWhich immune cell is known as the “master regulator” of the immune response?',
        answers: [
            {text: 'T lymphocyt', correct: true},
            {text: 'B lymphocyte', correct: false},
            {text: 'Dendritic cell', correct: false},
            {text: 'Macrophage', correct: false},
        ]
    },
    {
        question: 'What is the role of cytokines in microbial immunology?',
        answers: [
            {text: 'Enhance antibody production', correct: false},
            {text: 'Mediate cell signaling', correct: true},
            {text: 'Cause vasodilation', correct: false},
            {text: 'Induce phagocytosis', correct: false},
        ]
    },
    {
        question: 'Which class of MHC molecules presents endogenous antigens to cytotoxic T cells?',
        answers: [
            {text: 'MHC class I', correct: true},
            {text: 'MHC class II', correct: false},
            {text: 'MHC class III', correct: false},
            {text: 'MHC class IV', correct: false},
        ]
    },
    {
        question: 'What is the primary function of the complement system in microbial immunity?',
        answers: [
            {text: 'Antibody production', correct: false},
            {text: 'Phagocytosis', correct: false},
            {text: 'Inflammation', correct: true},
            {text: 'Antigen recognition', correct: false},
        ]
    },
    {
        question: 'Which type of immunity is acquired through exposure to pathogens or vaccination?',
        answers: [
            {text: 'Innate immunity', correct: false},
            {text: 'Adaptive immunity', correct: true},
            {text: 'Passive immunity', correct: false},
            {text: 'Natural immunity', correct: false},
        ]
    },
    {
        question: 'What is the main function of memory cells in the immune system?',
        answers: [
            {text: 'Produce antibodies', correct: false},
            {text: 'Recognize antigens', correct: false},
            {text: 'Mount a rapid and specific response upon re-exposure', correct: true},
            {text: 'Induce inflammation', correct: false},
        ]
    },
    {
        question: 'Which antibody is the first to appear during an immune response and is often associated with the primary response?',
        answers: [
            {text: 'IgA', correct: false},
            {text: 'IgE', correct: false},
            {text: 'IgG', correct: false},
            {text: 'IgM', correct: true},
        ]
    },
    {
        question: 'What is the role of antigen-presenting cells (APCs) in the immune system?',
        answers: [
            {text: 'Produce antibodies', correct: false},
            {text: 'Engulf and present antigens to T cells', correct: true},
            {text: 'Release histamines', correct: false},
            {text: 'Perform phagocytosis', correct: false},
        ]
    },
    {
        question: 'Which type of T cell is responsible for activating other immune cells and promoting the immune response?',
        answers: [
            {text: 'Cytotoxic T cell', correct: false},
            {text: 'Memory T cell', correct: false},
            {text: 'Regulatory T cell', correct: false},
            {text: 'Helper T cell', correct: true},
        ]
    },
    {
        question: 'What is the function of antibodies in opsonization?',
        answers: [
            {text: 'Induce inflammation', correct: false},
            {text: 'Enhance phagocytosis', correct: true},
            {text: 'Neutralize toxins', correct: false},
            {text: 'Activate complement', correct: false},
        ]
    },
    {
        question: 'Which class of immunoglobulins is primarily found in mucosal secretions such as saliva and tears?',
        answers: [
            {text: 'IgA', correct: true},
            {text: 'IgE', correct: false},
            {text: 'IgG', correct: false},
            {text: 'IgM', correct: false},
        ]
    },
    {
        question: 'What is the primary function of cytotoxic T cells in microbial immunology?',
        answers: [
            {text: 'Produce antibodies', correct: false},
            {text: 'Present antigens to other cells', correct: false},
            {text: 'Kill infected cells', correct: true},
            {text: 'Modulate immune response', correct: false},
        ]
    },
    {
        question: 'Which class of MHC molecules presents exogenous antigens to helper T cells?',
        answers: [
            {text: 'MHC class I', correct: false},
            {text: 'MHC class II', correct: true},
            {text: 'MHC class III', correct: false},
            {text: 'MHC class IV', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a vaccine in microbial immunology?',
        answers: [
            {text: 'Treat infections', correct: false},
            {text: 'Prevent allergic reactions', correct: false},
            {text: 'Inhibit complement activation', correct: false},
            {text: 'Activate the immune system against specific pathogens', correct: true},
        ]
    },
    {
        question: 'Which type of immunity is transferred from mother to infant through breast milk?',
        answers: [
            {text: 'Innate immunity', correct: false},
            {text: 'Adaptive immunity', correct: false},
            {text: 'Passive immunity', correct: true},
            {text: 'Natural immunity', correct: false},
        ]
    },
    {
        question: 'What is the primary function of regulatory T cells in the immune system?',
        answers: [
            {text: 'Kill infected cells', correct: false},
            {text: 'Produce antibodies', correct: false},
            {text: 'Recognize antigens', correct: false},
            {text: 'Suppress immune responses', correct: true},
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
    console.log(scoreArray);
})

function showScore(){
    resetState();
    scoreArray.forEach(item =>{
        console.log(item);
        if (item == 1){
            score++;
        }
    })
    questionElement.innerHTML = `You scored ${score} out ${questions.length}!`;
    restartBtn.style.display = 'block';
    preBtn.style.display = 'none';
    nextBtn.style.display = 'none';
}

restartBtn.addEventListener('click', ()=>{
    startQuiz();
})

preBtn.addEventListener('click', previousQuestion);

function previousQuestion(){
    if (currentQuestionIndex <= 0){
        alert('Cannot go back beyond the first question!');
        return
    } else if (scoreArray.length == 0){
        currentQuestionIndex--;
        currentQuestionNumber.innerHTML = (currentQuestionIndex + 1) + '/' + questions.length;
        
        showQuestion();
        return;
    } else{
        if (currentQuestionIndex == scoreArray.length){
            scoreArray.pop();

            currentQuestionIndex--;
            currentQuestionNumber.innerHTML = (currentQuestionIndex + 1) + '/' + questions.length;
        
            showQuestion();
        } else if (currentQuestionIndex > scoreArray.length){
            currentQuestionIndex--;
            currentQuestionNumber.innerHTML = (currentQuestionIndex + 1) + '/' + questions.length;
        
            showQuestion();
        } else{
            scoreArray.pop();
            scoreArray.pop();
            currentQuestionIndex--;
            currentQuestionNumber.innerHTML = (currentQuestionIndex + 1) + '/' + questions.length;
        
            showQuestion();
        }
        
    }
}

startQuiz();
