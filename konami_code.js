const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

//

document.body.addEventListener('keydown', init(e));

//

var index = 0;

//

function init(e) {
var key = e.key;
  if (key === codes[index]) {
    index ++;
  }
  if (index === codes.length) {
    alert("Hurray!");
    
    index = 0;
  }
  else {
    index = 0;
  }
}
