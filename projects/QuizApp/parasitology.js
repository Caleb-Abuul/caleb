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
        question: 'Which parasite causes malaria in humans?',
        answers: [
            {text: 'Trypanosoma', correct: false},
            {text: 'Plasmodium', correct: true},
            {text: 'Giardia ', correct: false},
            {text: 'Leishmania', correct: false},
        ]
    },
    {
        question: 'What is the primary mode of transmission for the parasitic roundworm Ascaris lumbricoides?',
        answers: [
            {text: 'Mosquito bites', correct: false},
            {text: 'Contaminated food and water', correct: true},
            {text: 'Sexual contact', correct: false},
            {text: 'Inhalation of airborne cysts', correct: false},
        ]
    },
    {
        question: 'Which parasitic infection is caused by the protozoan Trypanosoma cruzi?',
        answers: [
            {text: 'Chagas disease', correct: true},
            {text: 'Toxoplasmosis', correct: false},
            {text: 'Malaria', correct: false},
            {text: 'Sleeping sickness', correct: false},
        ]
    },
    {
        question: 'What is the common name for the parasitic infection caused by the Sarcoptes scabiei mite?',
        answers: [
            {text: 'Ringworm', correct: false},
            {text: 'Scabies', correct: true},
            {text: 'Hookworm', correct: false},
            {text: 'Pinworm', correct: false},
        ]
    },
    {
        question: 'Which parasitic flatworm causes schistosomiasis in humans?',
        answers: [
            {text: 'Taenia solium', correct: false},
            {text: 'Schistosoma mansoni', correct: true},
            {text: 'Echinococcus granulosus', correct: false},
            {text: 'Fasciola hepatica', correct: false},
        ]
    },
    {
        question: 'What is the definitive host for the tapeworm Taenia solium?',
        answers: [
            {text: 'Pigs', correct: false},
            {text: 'Cattle', correct: false},
            {text: 'Humans', correct: true},
            {text: 'Dogs', correct: false},
        ]
    },
    {
        question: 'Which parasitic infection is commonly known as “river blindness”?',
        answers: [
            {text: 'Onchocerciasis', correct: true},
            {text: 'Trichinosis', correct: false},
            {text: 'Filariasis', correct: false},
            {text: 'Leishmaniasis', correct: false},
        ]
    },
    {
        question: 'What is the vector for the transmission of the parasitic protozoan that causes African sleeping sickness?',
        answers: [
            {text: 'Mosquitoes', correct: false},
            {text: 'Tsetse flies', correct: true},
            {text: 'Sandflies', correct: false},
            {text: 'Lice', correct: false},
        ]
    },
    {
        question: 'Which intestinal parasite is often transmitted through the ingestion of undercooked or raw fish?',
        answers: [
            {text: 'Toxoplasma gondii', correct: false},
            {text: 'Cryptosporidium parvum', correct: false},
            {text: 'Anisakis simplex', correct: true},
            {text: 'Entamoeba histolytica', correct: false},
        ]
    },
    {
        question: 'What is the causative agent of the parasitic infection known as trichomoniasis?',
        answers: [
            {text: 'Trichuris trichiura', correct: false},
            {text: 'Trichinella spiralis', correct: false},
            {text: 'Trichomonas vaginalis', correct: true},
            {text: 'Toxocara canis', correct: false},
        ]
    },
    {
        question: 'Which parasitic flatworm is responsible for causing liver fluke infections in humans?',
        answers: [
            {text: 'Taenia solium', correct: false},
            {text: 'Schistosoma mansoni', correct: false},
            {text: 'Fasciola hepatica', correct: true},
            {text: 'Echinococcus granulosus', correct: false},
        ]
    },
    {
        question: 'What is the mode of transmission for the parasitic protozoan causing toxoplasmosis?',
        answers: [
            {text: 'Ingestion of contaminated food or water', correct: true},
            {text: 'Vector-borne transmission', correct: false},
            {text: 'Sexual contact', correct: false},
            {text: 'Inhalation of airborne cysts', correct: false},
        ]
    },
    {
        question: 'Which parasitic infection is associated with the larval form of the pork tapeworm?',
        answers: [
            {text: 'Trichinosis', correct: false},
            {text: 'Cysticercosis', correct: true},
            {text: 'Hydatid disease', correct: false},
            {text: 'Filariasis', correct: false},
        ]
    },
    {
        question: 'What is the primary vector for the transmission of the parasitic protozoan causing Chagas disease?',
        answers: [
            {text: 'Mosquitoes', correct: false},
            {text: 'Ticks', correct: false},
            {text: 'Triatomine bugs (kissing bugs)', correct: true},
            {text: 'Sandflies', correct: false},
        ]
    },
    {
        question: 'Which parasitic infection is caused by the bite of infected female Anopheles mosquitoes?',
        answers: [
            {text: 'Filariasis', correct: false},
            {text: 'Malaria', correct: true},
            {text: 'Leishmaniasis', correct: false},
            {text: 'Onchocerciasis', correct: false},
        ]
    },
    {
        question: 'What is the common name for the parasitic infection caused by the Enterobius vermicularis?',
        answers: [
            {text: 'Hookworm', correct: false},
            {text: 'Pinworm', correct: true},
            {text: 'Roundworm', correct: false},
            {text: 'Tapeworm', correct: false},
        ]
    },
    {
        question: 'Which parasitic infection is characterized by the presence of itchy, red, and raised tracks on the skin?',
        answers: [
            {text: 'Scabies', correct: true},
            {text: 'Toxoplasmosis', correct: false},
            {text: 'Leishmaniasis', correct: false},
            {text: 'Onchocerciasis', correct: false},
        ]
    },
    {
        question: 'What is the primary host for the parasitic protozoan causing leishmaniasis?',
        answers: [
            {text: 'Dogs', correct: false},
            {text: 'Humans', correct: true},
            {text: 'Cats', correct: false},
            {text: 'Rodents', correct: false},
        ]
    },
    {
        question: 'Which parasitic infection is associated with contaminated soil and poor hygiene?',
        answers: [
            {text: 'Amebiasis', correct: false},
            {text: 'Cryptosporidiosis', correct: false},
            {text: 'Giardiasis', correct: false},
            {text: 'Ascariasis', correct: true},
        ]
    },
    {
        question: 'What is the primary mode of transmission for the parasitic flatworm causing echinococcosis?',
        answers: [
            {text: 'Ingestion of contaminated food or water', correct: true},
            {text: 'Vector-borne transmission', correct: false},
            {text: 'Direct contact with infected individuals', correct: false},
            {text: 'Inhalation of airborne cysts', correct: false},
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
