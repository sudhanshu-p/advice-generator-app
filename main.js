let advice, data;

const adviceCount = document.querySelector('.advice-count');
const adviceContent = document.querySelector('.advice-content');

async function getAdvice () {
    advice = await fetch ("https://api.adviceslip.com/advice");
    data = await (advice.json());
    console.log(data);
    adviceCount.innerHTML += data.slip.id;
    adviceContent.innerHTML = '"' + data.slip.advice + '"';
}

getAdvice();