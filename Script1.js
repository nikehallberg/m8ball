const answers = [
    "It is certain",
    "As I see it, yes",
    "Reply hazy, try again",
    "Don't count on it",
    "It is decidedly so",
    "Most likely",
    "Ask again later",
    "My reply is no",
    "Without a doubt",
    "Outlook good",
    "Better not tell you now",
    "My sources say no",
    "Yes definitely",
    "Yes",
    "Cannot predict now",
    "Outlook not so good",
    "You may rely on it",
    "Signs point to yes",
    "Concentrate and ask again",
    "Very doubtful"
];

const generateAnswer = () => {
    const randomIndex = Math.floor(Math.random() * answers.length); 
    return answers[randomIndex]; 
};

const showAnswer = () => {
    const answerDiv = document.querySelector('.answers'); 
    const answer = generateAnswer(); 
    answerDiv.innerHTML = `<p>${answer}</p>`; 
};

document.querySelector('.ball button').addEventListener('click', () => {
    showAnswer();
});