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
        question: 'Which structure is responsible for the reproduction of fungi in mycology?',
        answers: [
            {text: 'Hyphae', correct: false},
            {text: 'Spore', correct: true},
            {text: 'Mycelium', correct: false},
            {text: 'Stolon', correct: false},
        ]
    },
    {
        question: 'What is the primary function of the fungal cell wall?',
        answers: [
            {text: 'Protection', correct: true},
            {text: 'Nutrient absorption', correct: false},
            {text: 'Cellular communication', correct: false},
            {text: 'Reproduction', correct: false},
        ]
    },
    {
        question: 'Which fungal group forms mutualistic associations with plant roots?',
        answers: [
            {text: 'Ascomycetes', correct: false},
            {text: 'Basidiomycetes', correct: false},
            {text: 'Zygomycetes', correct: false},
            {text: 'Mycorrhizal fungi', correct: true},
        ]
    },
    {
        question: 'What is the defining feature of a lichen in mycology?',
        answers: [
            {text: 'Rhizoids', correct: false},
            {text: 'Soredia', correct: true},
            {text: 'Conidia', correct: false},
            {text: 'Basidiocarp', correct: false},
        ]
    },
    {
        question: 'Which fungal infection is commonly known as “athlete\'s foot”?',
        answers: [
            {text: 'Candidiasis', correct: false},
            {text: 'Ringworm', correct: false},
            {text: 'Aspergillosis', correct: false},
            {text: 'Tinea pedis', correct: true},
        ]
    },
    {
        question: 'What is the main role of conidia in fungal reproduction?',
        answers: [
            {text: 'Sexual reproduction', correct: false},
            {text: 'Asexual reproduction', correct: true},
            {text: 'Spore dispersal', correct: false},
            {text: 'Gamete formation', correct: false},
        ]
    },
    {
        question: 'Which fungal structure is involved in the sexual reproduction of Ascomycetes?',
        answers: [
            {text: 'Basidiocarp', correct: false},
            {text: 'Ascus', correct: true},
            {text: 'Basidium', correct: false},
            {text: 'Zygospore', correct: false},
        ]
    },
    {
        question: 'What type of symbiotic relationship exists between fungi and algae in lichens?',
        answers: [
            {text: 'Parasitism', correct: false},
            {text: 'Commensalism', correct: false},
            {text: 'Mutualism', correct: true},
            {text: 'Predation', correct: false},
        ]
    },
    {
        question: 'Which fungal genus includes species responsible for producing penicillin?',
        answers: [
            {text: 'Aspergillus', correct: true},
            {text: 'Candida', correct: false},
            {text: 'Trichophyton', correct: false},
            {text: 'Saccharomyces', correct: false},
        ]
    },
    {
        question: 'What is the primary role of mycorrhizae in plant-fungal interactions?',
        answers: [
            {text: 'Nutrient absorption', correct: true},
            {text: 'Photosynthesis', correct: false},
            {text: 'Water transport', correct: false},
            {text: 'Reproduction', correct: false},
        ]
    },
    {
        question: 'Which fungal phylum includes the “club fungi” with prominent fruiting bodies?',
        answers: [
            {text: 'Ascomycota', correct: false},
            {text: 'Basidiomycota', correct: true},
            {text: 'Zygomycota', correct: false},
            {text: 'Chytridiomycota', correct: false},
        ]
    },
    {
        question: 'What is the primary function of the rhizoids in fungi?',
        answers: [
            {text: 'Asexual reproduction', correct: false},
            {text: 'Nutrient absorption', correct: false},
            {text: 'Spore dispersal', correct: false},
            {text: 'Attachment to substrates', correct: true},
        ]
    },
    {
        question: 'Which fungal infection is caused by the yeast Candida?',
        answers: [
            {text: 'Ringworm', correct: false},
            {text: 'Thrush', correct: true},
            {text: 'Aspergillosis', correct: false},
            {text: 'Histoplasmosis', correct: false},
        ]
    },
    {
        question: 'WWhich term describes the fusion of cytoplasm between two fungal hyphae?',
        answers: [
            {text: 'Plasmogamy', correct: true},
            {text: 'Karyogamy', correct: false},
            {text: 'Meiosis', correct: false},
            {text: 'Mitosis', correct: false},
        ]
    },
    {
        question: 'What is the primary role of a fungal sporangium?',
        answers: [
            {text: 'Nutrient storage', correct: false},
            {text: 'Spore production', correct: true},
            {text: 'Gas exchange', correct: false},
            {text: 'Gamete formation', correct: false},
        ]
    },
    {
        question: 'Which fungal group includes species commonly used in the fermentation of bread and beer?',
        answers: [
            {text: 'Zygomycetes', correct: false},
            {text: 'Ascomycetes', correct: false},
            {text: 'Basidiomycetes', correct: false},
            {text: 'Saccharomycetes', correct: true},
        ]
    },
    {
        question: 'What is the main characteristic of fungi belonging to the phylum Chytridiomycota?',
        answers: [
            {text: 'Flagellated spores', correct: true},
            {text: 'Club-shaped basidia', correct: false},
            {text: 'Septate hyphae', correct: false},
            {text: 'Ascocarps', correct: false},
        ]
    },
    {
        question: 'Which fungal infection is caused by inhaling spores from bird droppings?',
        answers: [
            {text: 'Aspergillosis', correct: false},
            {text: 'Coccidioidomycosis', correct: false},
            {text: 'Histoplasmosis', correct: true},
            {text: 'Blastomycosis', correct: false},
        ]
    },
    {
        question: 'What is the purpose of a mycelium in fungi?',
        answers: [
            {text: 'Asexual reproduction', correct: false},
            {text: 'Nutrient absorption', correct: true},
            {text: 'Spore dispersal', correct: false},
            {text: 'Gamete formation', correct: false},
        ]
    },
    {
        question: 'Which fungal structure is involved in the sexual reproduction of Basidiomycetes?',
        answers: [
            {text: 'Ascus', correct: false},
            {text: 'Basidium', correct: false},
            {text: 'Conidium', correct: false},
            {text: 'Zygospore', correct: true},
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
