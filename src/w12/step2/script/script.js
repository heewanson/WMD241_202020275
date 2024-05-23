console.log("안녕하세요?");
let elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "oklch(0.8, 0.05, 0)";

let aCard = document.querySelector(".card");
//html엘레먼트.addEentListener('이벤트종류',funtion(){할일});
console.log(aCard);
aCard.addEventListener("click", function () {
  console.log("클릭");
  aCard.classList.toggle("card--state-clicked");
  console.log(aCard.classList); //classList domtokenlist add class 추가 remocve 지울수 있음 togle
});
