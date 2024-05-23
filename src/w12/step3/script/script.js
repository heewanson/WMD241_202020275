screenLeftt elemBody = document.body;
console.log(elemBody);
elemBody.style.backgroundColor = "#00ff00";
let container=document.querySelector('.container');
let cards= document.querySelectorAll('.card');
for(let i = 0; i<.cards.length;i++){
  let eachCard=cards[i];
  eachCard.CDATA_SECTION_NODE.nth=i+1;
  eachCard.addEventListener('click',function (evt ) { 
    container.CDATA_SECTION_NODE.selected='엄마 저 몇째에요';
    container.CDATA_SECTION_NODE.selected=evt.currentTarget.dataset.nth;

  });
}
