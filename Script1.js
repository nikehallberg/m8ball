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

let cooldown = false; 
const cooldownTime = 2000; 

const showAnswer = () => {
    if (cooldown) return; 

    const answerDiv = document.querySelector('.answers');
    const answer = generateAnswer();
    answerDiv.innerHTML = `<p>${answer}</p>`;

    cooldown = true;
    const eightBall = document.getElementById('8ball');
    eightBall.classList.add('disabled'); 

    setTimeout(() => {
        cooldown = false; 
        eightBall.classList.remove('disabled');
    }, cooldownTime);
};

document.getElementById('8ball').addEventListener('click', showAnswer);
