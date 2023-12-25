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
        question: 'What is the primary target of a virus in a host organism?',
        answers: [
            {text: 'Nucleus', correct: true},
            {text: 'Cell membrane', correct: false},
            {text: 'Cytoplasm', correct: false},
            {text: 'Mitochondria', correct: false},
        ]
    },
    {
        question: 'Which viral family does the human immunodeficiency virus (HIV) belong to?',
        answers: [
            {text: 'Flaviviridae', correct: false},
            {text: 'Retroviridae', correct: true},
            {text: 'Herpesviridae', correct: false},
            {text: 'Papillomaviridae', correct: false},
        ]
    },
    {
        question: 'What is the outer protein coat of a virus called?',
        answers: [
            {text: 'Capsid', correct: true},
            {text: 'Envelope', correct: false},
            {text: 'Matrix', correct: false},
            {text: 'Nucleocapsid', correct: false},
        ]
    },
    {
        question: 'Which of the following is a DNA virus?',
        answers: [
            {text: 'Influenza virus', correct: false},
            {text: 'Measles virus', correct: false},
            {text: 'Herpes simplex virus', correct: true},
            {text: 'Rabies virus', correct: false},
        ]
    },
    {
        question: 'What enzyme is responsible for the replication of RNA in retroviruses?',
        answers: [
            {text: 'Reverse transcriptase', correct: true},
            {text: 'DNA polymerase', correct: false},
            {text: 'RNA polymerase', correct: false},
            {text: 'Ligase', correct: false},
        ]
    },
    {
        question: 'Which type of viral infection involves the continuous production of viruses without causing immediate cell death?',
        answers: [
            {text: 'Latent infection', correct: false},
            {text: 'Persistent infection', correct: true},
            {text: 'Acute infection', correct: false},
            {text: 'Chronic infection', correct: false},
        ]
    },
    {
        question: 'What is the main mode of transmission for the hepatitis A virus?',
        answers: [
            {text: 'Blood transfusion', correct: false},
            {text: 'Sexual contact', correct: false},
            {text: 'Fecal-oral route', correct: true},
            {text: 'Respiratory droplets', correct: false},
        ]
    },
    {
        question: 'Which antiviral drug is commonly used to treat influenza infections?',
        answers: [
            {text: 'Acyclovir', correct: false},
            {text: 'Tamiflu', correct: true},
            {text: 'Ribavirin', correct: false},
            {text: 'AZT', correct: false},
        ]
    },
    {
        question: 'What is the primary target of the human papillomavirus (HPV)?',
        answers: [
            {text: 'Liver', correct: false},
            {text: 'Skin', correct: false},
            {text: 'Genital tract', correct: true},
            {text: 'Respiratory tract', correct: false},
        ]
    },
    {
        question: 'Which virus is responsible for causing chickenpox?',
        answers: [
            {text: 'Herpes simplex virus', correct: false},
            {text: 'Varicella-zoster virus', correct: true},
            {text: 'Epstein-Barr virus', correct: false},
            {text: 'Cytomegalovirus', correct: false},
        ]
    },
    {
        question: 'In the context of viruses, what does the term “enveloped” refer to?',
        answers: [
            {text: 'IPresence of an outer protein coatgA', correct: false},
            {text: 'Lack of a protein coat', correct: false},
            {text: 'Presence of a lipid membrane', correct: true},
            {text: 'Absence of genetic material', correct: false},
        ]
    },
    {
        question: 'Which of the following is a vector for the transmission of arboviruses?',
        answers: [
            {text: 'Ticks', correct: false},
            {text: 'Mosquitoes', correct: true},
            {text: 'Fleas', correct: false},
            {text: 'Lice', correct: false},
        ]
    },
    {
        question: 'What is the mode of transmission for the Ebola virus?',
        answers: [
            {text: 'Respiratory droplets', correct: false},
            {text: 'Sexual contact', correct: false},
            {text: 'Direct contact with blood or body fluids', correct: true},
            {text: 'Foodborne transmission', correct: false},
        ]
    },
    {
        question: 'What is the primary target of the poliovirus?',
        answers: [
            {text: 'Nervous system', correct: true},
            {text: 'Liver', correct: false},
            {text: 'Lungs', correct: false},
            {text: 'Kidneys', correct: false},
        ]
    },
    {
        question: 'Which virus is associated with the development of cervical cancer?',
        answers: [
            {text: 'Hepatitis B virus', correct: false},
            {text: 'Human papillomavirus (HPV)', correct: true},
            {text: 'Epstein-Barr virus', correct: false},
            {text: 'Human T-lymphotropic virus (HTLV)', correct: false},
        ]
    },
    {
        question: 'What is the mechanism of action of protease inhibitors in antiretroviral therapy?',
        answers: [
            {text: 'Inhibition of viral entry', correct: false},
            {text: 'Inhibition of reverse transcription', correct: false},
            {text: 'Inhibition of viral assembly', correct: true},
            {text: 'Inhibition of viral release', correct: false},
        ]
    },
    {
        question: 'Which virus causes infectious mononucleosis?',
        answers: [
            {text: 'Cytomegalovirus', correct: false},
            {text: 'Epstein-Barr virus', correct: true},
            {text: 'Influenza virus', correct: false},
            {text: 'Human herpesvirus 6', correct: false},
        ]
    },
    {
        question: 'What is the primary reservoir for the Zika virus?',
        answers: [
            {text: 'Primates', correct: false},
            {text: 'Birds', correct: false},
            {text: 'Rodents', correct: false},
            {text: 'Mosquitoes', correct: true},
        ]
    },
    {
        question: 'Which hepatitis virus is primarily transmitted through contaminated water and food?',
        answers: [
            {text: 'Hepatitis A virus', correct: true},
            {text: 'Hepatitis B virus', correct: false},
            {text: 'Hepatitis C virus', correct: false},
            {text: 'Hepatitis E viru', correct: false},
        ]
    },
    {
        question: 'What is the mode of transmission for the human respiratory syncytial virus (RSV)?',
        answers: [
            {text: 'Sexual contact', correct: false},
            {text: 'Airborne droplets ', correct: true},
            {text: 'Fecal-oral route', correct: false},
            {text: 'Blood transfusion', correct: false},
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
