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
        question: 'What is the purpose of a microscope’s condenser?',
        answers: [
            {text: 'Magnification', correct: false},
            {text: 'Illumination', correct: true},
            {text: 'Resolution', correct: false},
            {text: 'Focusing', correct: false},
        ]
    },
    {
        question: 'Which type of microscope is commonly used for viewing live specimens?',
        answers: [
            {text: 'Transmission Electron Microscope (TEM)', correct: false},
            {text: 'Scanning Electron Microscope (SEM)', correct: false},
            {text: 'Phase-Contrast Microscope', correct: true},
            {text: 'Confocal Microscope', correct: false},
        ]
    },
    {
        question: 'What does the term “resolution” refer to in microscopy?',
        answers: [
            {text: 'Brightness of the image', correct: false},
            {text: 'Ability to distinguish between two points', correct: true},
            {text: 'Magnification power', correct: false},
            {text: 'Depth of field', correct: false},
        ]
    },
    {
        question: 'In a compound light microscope, what is the function of the objective lens?',
        answers: [
            {text: 'Magnifying the specimen', correct: true},
            {text: 'Collecting and focusing light', correct: false},
            {text: 'Illuminating the specimen', correct: false},
            {text: 'Controlling contrast', correct: false},
        ]
    },
    {
        question: 'Which staining technique is commonly used to visualize bacterial structures under a microscope?',
        answers: [
            {text: 'Hematoxylin and Eosin (H&E)', correct: false},
            {text: 'Gram staining', correct: true},
            {text: 'Immunofluorescence staining', correct: false},
            {text: 'Periodic Acid-Schiff (PAS) staining', correct: false},
        ]
    },
    {
        question: 'What is the purpose of oil immersion in microscopy?',
        answers: [
            {text: 'Improve resolution', correct: true},
            {text: 'Enhance contrast', correct: false},
            {text: 'Increase magnification', correct: false},
            {text: 'Reduce glare', correct: false},
        ]
    },
    {
        question: 'Which microscope is best suited for observing the surface features of specimens in three dimensions?',
        answers: [
            {text: 'Transmission Electron Microscope (TEM)', correct: false},
            {text: 'Confocal Microscope', correct: false},
            {text: 'Fluorescence Microscope', correct: false},
            {text: 'Scanning Electron Microscope (SEM)', correct: true},
        ]
    },
    {
        question: 'What is the main advantage of dark-field microscopy?',
        answers: [
            {text: 'High resolution', correct: false},
            {text: 'Enhanced contrast', correct: true},
            {text: 'Detailed internal structures', correct: false},
            {text: 'Ability to observe living cells', correct: false},
        ]
    },
    {
        question: 'Which component of a microscope controls the amount of light reaching the specimen?',
        answers: [
            {text: 'Objective lens', correct: false},
            {text: 'Iris diaphragm', correct: true},
            {text: 'Condenser', correct: false},
            {text: 'Eyepiece', correct: false},
        ]
    },
    {
        question: 'What is the function of the stage in a microscope?',
        answers: [
            {text: 'Adjusting magnification', correct: false},
            {text: 'Supporting the specimen', correct: true},
            {text: 'Controlling light intensity', correct: false},
            {text: 'Focusing the image', correct: false},
        ]
    },
    {
        question: 'Which microscopy technique uses laser light to create detailed images of fluorescently labeled specimens?',
        answers: [
            {text: 'Confocal Microscopy', correct: true},
            {text: 'Brightfield Microscopy', correct: false},
            {text: 'Dark-field Microscopy', correct: false},
            {text: 'Phase-Contrast Microscopy', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a hemocytometer in microscopy?',
        answers: [
            {text: 'Measure cell density', correct: true},
            {text: 'Stain cells', correct: false},
            {text: 'Create 3D images', correct: false},
            {text: 'Observe living cells', correct: false},
        ]
    },
    {
        question: 'In electron microscopy, what does TEM stand for?',
        answers: [
            {text: 'Total Electron Microscopy', correct: false},
            {text: 'Transmission Electron Microscopy', correct: true},
            {text: 'Thermal Electron Microscopy', correct: false},
            {text: 'True Electron Microscopy', correct: false},
        ]
    },
    {
        question: 'Which microscope allows for the observation of living cells in real-time?',
        answers: [
            {text: 'Electron Microscope', correct: false},
            {text: 'Fluorescence Microscope', correct: false},
            {text: 'Scanning Tunneling Microscope', correct: false},
            {text: 'Phase-Contrast Microscope', correct: true},
        ]
    },
    {
        question: 'What is the purpose of a cover slip in microscopy?',
        answers: [
            {text: 'Protect the specimen', correct: false},
            {text: 'Improve contrast', correct: false},
            {text: 'Prevent evaporation', correct: true},
            {text: 'Increase magnification', correct: false},
        ]
    },
    {
        question: 'Which microscope is used to study the internal structures of transparent specimens without staining?',
        answers: [
            {text: 'Brightfield Microscope', correct: false},
            {text: 'Phase-Contrast Microscope', correct: true},
            {text: 'Fluorescence Microscope', correct: false},
            {text: 'Dark-field Microscope', correct: false},
        ]
    },
    {
        question: 'What type of microscope is commonly used in forensic science for examining small details on surfaces?',
        answers: [
            {text: 'Atomic Force Microscope (AFM)', correct: true},
            {text: 'Scanning Electron Microscope (SEM)', correct: false},
            {text: 'Transmission Electron Microscope (TEM)', correct: false},
            {text: 'Polarizing Microscope', correct: false},
        ]
    },
    {
        question: 'Which microscope is best suited for observing the arrangement of atoms on a surface?',
        answers: [
            {text: 'Scanning Electron Microscope (SEM)', correct: false},
            {text: 'Transmission Electron Microscope (TEM)', correct: false},
            {text: 'Atomic Force Microscope (AFM)', correct: true},
            {text: 'Fluorescence Microscope', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a diaphragm in a light microscope?',
        answers: [
            {text: 'Control magnification', correct: false},
            {text: 'Regulate contrast', correct: true},
            {text: 'Adjust resolution', correct: false},
            {text: 'Focus the image', correct: false},
        ]
    },
    {
        question: 'In microscopy, what does the term “parfocal” mean?',
        answers: [
            {text: 'All lenses have the same focal length', correct: false},
            {text: 'Lenses can be easily focused', correct: false},
            {text: 'Parallax-free imaging', correct: false},
            {text: 'The microscope remains focused when objectives are changed', correct: true},
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
