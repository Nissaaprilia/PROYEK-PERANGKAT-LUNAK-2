//inisiasi soal dalam quiz
const questions = [
    {
        question: "Sendi mati atau persendian yang tidak memungkinkan untuk terjadinya pergerakan disebut...",
        optionA: "Ampiartrosis",
        optionB: "Diartrosis",
        optionC: "Sendi Engsel",
        optionD: "Sinartrosis",
        correctOption: "optionD"
    },

    {
        question: "Sendi antara tulang pengumpul dengan pergerakan tangan disebut sendi?",
        optionA: "Engsel",
        optionB: "Kondiloid",
        optionC: "Geser",
        optionD: "Pelana",
        correctOption: "optionB"
    },

    {
        question: "Ampiartrosis adalah hubungan antartulang yang...",
        optionA: "tidak memungkinkan untuk terjadinya pergerakan",
        optionB: "Memungkinkan terjadinya gerakan tulang secara lebih luas",
        optionC: "Memungkinkan gerak kesemua arah",
        optionD: "Hanya memungkinkan untuk terjadinya sedikit gerakan",
        correctOption: "optionD"
    },

    {
        question: "Hubungan antar ruang tulang belakang adalah contoh sendi..",
        optionA: "Ampiartrosisis",
        optionB: "Kondoloid",
        optionC: "Sinartrosis Sinkondrosisi",
        optionD: "Simfisis",
        correctOption: "optionC"
    },

    {
        question: "Hubungan antartulang yang hanya memungkinkan untuk terjadinya sedikit gerakan",
        optionA: "Sinartrosis",
        optionB: "Diartrosis",
        optionC: "Kondoloid",
        optionD: "Amfiartrosis",
        correctOption: "optionD"
    },

    {
        question: "Sendi yang memungkinkan gerak rotasi antar tulang (berporos satu) karena ujung tulang yang hanya satu dapat mengitari tulang lainnya adalah...",
        optionA: "Putar",
        optionB: "Engsel",
        optionC: "Pelana",
        optionD: "Geser",
        correctOption: "optionA"
    },
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 4) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}

let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 4) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 0) {
        remark = "Terus Mencoba."
        remarkColor = "red"
    }
    else if (playerScore >= 1 && playerScore < 3) {
        remark = "Tingkatkan lagi." 
        remarkColor = "orange"
    }
    else if (playerScore >= 4) {
        remark = "Kerja bagus." 
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 5) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}