// create article

let main = document.querySelector("main");
let article = document.createElement("article");
main.appendChild(article);

// create resultat bar

let displaySum = document.createElement("section");
let sumP = document.createElement("p");
displaySum.className = "displaySum";
article.appendChild(displaySum);
displaySum.appendChild(sumP);

// create the calculator body

let calculatorBody = document.createElement("section");
calculatorBody.className = "calculatorBody";
article.appendChild(calculatorBody);

// create the calculator body main

let bodyMain = document.createElement("section");
bodyMain.className = "bodyMain";
calculatorBody.appendChild(bodyMain);

// create the calculator body aside

let bodyAside = document.createElement("section");
bodyAside.className = "bodyAside";
calculatorBody.appendChild(bodyAside);

// create the button

let buttonP1 = document.createElement("input");
buttonP1.innerText = "(";
buttonP1.value = "(";
buttonP1.type = "button";
buttonP1.className = "btnOp btnValue";
bodyMain.appendChild(buttonP1);

let buttonP2 = document.createElement("input");
buttonP2.innerText = ")";
buttonP2.value = ")";
buttonP2.type = "button";
buttonP2.className = "btnOp btnValue";
bodyMain.appendChild(buttonP2);

let buttonPrct = document.createElement("input");
buttonPrct.innerText = "%";
buttonPrct.value = "%";
buttonPrct.type = "button";
buttonPrct.className = "btnOp btnValue";
bodyMain.appendChild(buttonPrct);

let buttonClear = document.createElement("input");
buttonClear.innerText = "C";
buttonClear.value = "C";
buttonClear.type = "button";
buttonClear.className = "btnOp";
buttonClear.addEventListener("click", reset);
bodyAside.appendChild(buttonClear);

let button7 = document.createElement("input");
button7.innerText = "7";
button7.value = "7";
button7.className = "btnValue";
button7.type = "button";
bodyMain.appendChild(button7);

let button8 = document.createElement("input");
button8.innerText = "8";
button8.value = "8";
button8.className = "btnValue";
button8.type = "button";
bodyMain.appendChild(button8);

let button9 = document.createElement("input");
button9.innerText = "9";
button9.value = "9";
button9.className = "btnValue";
button9.type = "button";
bodyMain.appendChild(button9);

let buttonDiv = document.createElement("input");
buttonDiv.innerText = "/";
buttonDiv.value = "/";
buttonDiv.type = "button";
buttonDiv.className = "btnOp btnValue";
bodyAside.appendChild(buttonDiv);

let button4 = document.createElement("input");
button4.innerText = "4";
button4.value = "4";
button4.className = "btnValue";
button4.type = "button";
bodyMain.appendChild(button4);

let button5 = document.createElement("input");
button5.innerText = "5";
button5.value = "5";
button5.className = "btnValue";
button5.type = "button";
bodyMain.appendChild(button5);

let button6 = document.createElement("input");
button6.innerText = "6";
button6.value = "6";
button6.className = "btnValue";
button6.type = "button";
bodyMain.appendChild(button6);

let buttonMult = document.createElement("input");
buttonMult.innerText = "*";
buttonMult.value = "*";
buttonMult.type = "button";
buttonMult.className = "btnOp btnValue";
bodyAside.appendChild(buttonMult);

let button1 = document.createElement("input");
button1.innerText = "1";
button1.value = "1";
button1.className = "btnValue";
button1.type = "button";
bodyMain.appendChild(button1);

let button2 = document.createElement("input");
button2.innerText = "2";
button2.value = "2";
button2.className = "btnValue";
button2.type = "button";
bodyMain.appendChild(button2);

let button3 = document.createElement("input");
button3.innerText = "3";
button3.value = "3";
button3.className = "btnValue";
button3.type = "button";
bodyMain.appendChild(button3);

let buttonSous = document.createElement("input");
buttonSous.innerText = "-";
buttonSous.value = "-";
buttonSous.type = "button";
buttonSous.className = "btnOp btnValue";
bodyAside.appendChild(buttonSous);

let button0 = document.createElement("input");
button0.innerText = "0";
button0.value = "0";
button0.className = "btnValue";
button0.type = "button";
bodyMain.appendChild(button0);

let buttonPoint = document.createElement("input");
buttonPoint.innerText = ".";
buttonPoint.value = ".";
buttonPoint.type = "button";
buttonPoint.className = "btnValue";
bodyMain.appendChild(buttonPoint);

let buttonEqual = document.createElement("input");
buttonEqual.innerText = "=";
buttonEqual.value = "=";
buttonEqual.type = "button";
buttonEqual.addEventListener("click", quickMath);
bodyMain.appendChild(buttonEqual);

let buttonAdd = document.createElement("input");
buttonAdd.innerText = "+";
buttonAdd.value = "+";
buttonAdd.type = "button";
buttonAdd.className = "btnOp btnValue";
bodyAside.appendChild(buttonAdd);

// loop add onclick

let inputOnClick = document.querySelectorAll(".btnValue");

for (const elem of inputOnClick) {
  elem.onclick = showValue;
  elem.setAttribute("onclick", "showValue(this)");
}

// history

let journalUl = document.createElement("ul");
main.appendChild(journalUl);

// CALCULATOR FUNCTION

let input = "";
let para = document.querySelector("p");

function showValue(btn) {
  input = input + btn.value;
  para.innerHTML = input;
}

function computeResult(str) {
  return Function("return " + str)();
}

function quickMath() {
  para.innerHTML = computeResult(input);
  let journal = document.createElement("li");
  console.log(para);
  journal.innerText = " " + input + "=" + para.innerHTML;
  journalUl.appendChild(journal);
}

function reset() {
  input = " ";
  para.innerHTML = " ";
}

let body = document.querySelector("body");

body.addEventListener("keypress", eventClick);

function eventClick(key) {
  if (key.keyCode == "76") {
    journalUl.innerText = " ";
  }
}
