const flashcardContainer = document.querySelector(".flashcardContainer");
const createCardSection = document.querySelector(".createCardSection");
const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
// let cardsArr = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
let cardsArr = [];

// let delFlashcards = () => {
//     localStorage.clear();
//     delFlashcards.innerHTML = '';
//     cardsArr = [];
// }

const flashcardMaker = (text) => {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const p = document.createElement("p");
    const close = document.createElement('button');
    const show = document.createElement('button');
    const reply = document.createElement("div");
    const correct = document.createElement('button');
    const incorrect = document.createElement('button');

    close.innerHTML = 'X';
    close.onclick = () => {
        div.remove();
    }

    show.innerHTML = "Toggle answer";
    show.addEventListener('click', () => {
        // p.classList.toggle("showDisplay");
        if (p.style.display === "none") {
            p.style.display = "block";
        } else {
            p.style.display = "none";
        }
    })

    div.className = 'flashcard';

    h4.textContent = text.ques;
    p.textContent = text.ans;
    // p.setAttribute("style", "display:none");

    correct.innerHTML = "correct";
    incorrect.innerHTML = "incorrect";

    reply.classList.add("replyClass");
    correct.classList.add("correctClass");
    incorrect.classList.add("incorrectClass");

    const replyClass = document.querySelector("replyClass");
    const correctClass = document.querySelector("correctClass");
    const incorrectClass = document.querySelector("incorrectClass");

    reply.appendChild(correct);
    reply.appendChild(incorrect);

    div.appendChild(close);
    div.appendChild(h4);
    div.appendChild(show);
    div.appendChild(p);
    div.appendChild(reply);

    flashcardContainer.appendChild(div);
}

const addFlashcard = () => {
    let flashcardInfo = {
        'ques': question.value,
        'ans': answer.value
    }

    cardsArr.push(flashcardInfo);
    // localStorage.setItem('items', JSON.stringify(cardsArr));
    flashcardMaker(cardsArr[cardsArr.length - 1]);
    question.value = "";
    answer.value = "";


}

saveCard.addEventListener('click', () => {
    addFlashcard();
});

hideCreateBox.addEventListener('click', () => {
    createCardSection.style.display = "none";
})

showCardBox.addEventListener('click', () => {
    createCardSection.style.display = "block";
})

cardsArr.forEach(flashcardMaker);





