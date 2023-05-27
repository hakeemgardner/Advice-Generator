const dice = document.querySelector(".dice");

dice.addEventListener("click", fetchData);

async function fetchData() {
  let res = await fetch("https://api.adviceslip.com/advice");
  let data = await res.json();
  const adviceNumber = document.getElementById("number");
  const advice = document.getElementById("advice");
  advice.innerHTML = data.slip.advice;
  adviceNumber.innerHTML = data.slip.id;
}
