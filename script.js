const h1El = document.querySelector("h1");
const span = document.querySelector("span");
const btn = document.querySelector("button");


window.addEventListener("load", () => {
      generateAdvice();
});

// btn.addEventListener("click", () => {
//       generateAdvice();
// });

function generateAdvice() {

      let adviceID = Math.floor(Math.random() * 240) + 1;

      let url = "https://api.adviceslip.com/advice/" + adviceID;

      loadMessage();

      fetch(url)
            .then(res => res.json())
            .then(data => {
                  
                  h1El.innerText = "ADVICE #" + data.slip.id;
                  span.innerText = data.slip.advice;
            });
}

function loadMessage() {
      h1El.innerText = "Actively loading advice......";
      span.innerText = "Please wait.....";
}
