const coinButtons = document.querySelector(".coinButtons");
const coinImage = document.querySelector("#coinImage");
const coinResults = document.querySelector(".coinResults");

const coinChoices = ["heads", "tails"]
const coinImages  = ["heads.jpg", "tails.jpg"]
const coinScore = [0, 0];

const coinRound = function (coinChoice) {

    const choiceString = coinChoices[coinChoice];
    

    const tossRandom = Math.floor(Math.random() * 2);
    const tossString = coinChoices[tossRandom];
    const coinImageSrc = coinImages[tossRandom];

    coinImage.setAttribute("src", coinImageSrc);

    if (coinChoice === tossRandom) {
        coinScore[0] ++;
        coinResults.innerHTML = `
            <p>You chose ${choiceString}<br>
            The toss is ${tossString}<br>
            You chose wisely!</p>
            <p>Wins = ${coinScore[0]} Losses = ${coinScore[1]}</p>
        `
    } else {
        coinScore[1] ++;
        coinResults.innerHTML = `
            <p>You chose ${choiceString}<br>
            The toss is ${tossString}<br>
            Sorry, wrong choice</p>
            <p>Wins = ${coinScore[0]} Losses = ${coinScore[1]}</p>
        `
    };

};

coinButtons.addEventListener("click", e => {

    if (e.target.tagName === "BUTTON"){
        coinRound(Number(e.target.value));
    };

});