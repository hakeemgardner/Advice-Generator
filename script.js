const dice = document.querySelector(".dice");

dice.addEventListener("click", fetchData);

async function fetchData() {
  try {
    let res = await fetch("https://api.adviceslip.com/advice");
    if (!res.ok) {
      throw new Error("Network response was not ok.");
    }
    let data = await res.json();
    const adviceNumber = document.getElementById("number");
    const advice = document.getElementById("advice");
    advice.innerHTML = data.slip.advice;
    adviceNumber.innerHTML = data.slip.id;
  } catch (error) {
    // Handle the error
    console.error("Error:", error);
    // Display an error message to the user
    const advice = document.getElementById("advice");
    advice.innerHTML = "Error occurred while fetching data.";
  }
}
