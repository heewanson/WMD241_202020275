console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "#0000ff";

// let aCard = document.querySelector(".card");
// console.log(aCard);
// // html엘레먼트.addEventListener('이벤트종류', function () {할일});
// aCard.addEventListener("click", function () {
//   console.log("클릭!");
//   // aCard.style.backgroundColor = '#ff0000';
//   aCard.classList.toggle("card--state-clicked");
//   console.log(aCard.classList);
// });

// document.querySelectorAll('.card');
let cards = document.querySelectorAll(".card");
console.log(cards);
for (let i = 0; i < cards.length;) i++{
  let eachCard = cards[i];
  eachCard.classList.toggle("card--state-clicked");
};
