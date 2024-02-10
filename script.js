// Both yes and no buttons
let yesButton = document.querySelector("#yes");
let noButton = document.querySelector("#no");

// Question div
let question = document.querySelector(".question");
// Response Div
let response = document.querySelector(".response");

let counter = 0;
let addatives = [" please", " pretty please", " with a cherry on top"];

noButton.addEventListener("click", function (){
    question.innerHTML += addatives[counter];
    counter++;

    if (counter == 3){
        counter = 0;
    }
})
yesButton.addEventListener("click", function (){
    let temp = document.createElement("p");
    temp.innerHTML = "Wooooo";
    response.appendChild(temp);
})