let btn = document.querySelectorAll("button");
let display = document.querySelector(".display");
let displayVal = "";
let result = (value) => {
  displayVal += value;
  display.value = displayVal;
};
let calculate = (evaluation) => {
  let sum = eval(evaluation);
  display.value = sum;
  displayVal = sum.toString()
};
let clear = () => {
  displayVal = "";
  display.value = "";
};
let del = () => {
  displayVal = displayVal.slice(0, -1);
  display.value = displayVal;
};
btn[0].addEventListener("click", () => {
  clear();
});
btn[1].addEventListener("click", () => {
  del();
});
btn[2].addEventListener("click", () => {
  result("%");
});
btn[3].addEventListener("click", () => {
  result("/");
});
btn[4].addEventListener("click", () => {
  result("7");
});
btn[5].addEventListener("click", () => {
  result("8");
});
btn[6].addEventListener("click", () => {
  result("9");
});
btn[7].addEventListener("click", () => {
  result("*");
});
btn[8].addEventListener("click", () => {
  result("4");
});
btn[9].addEventListener("click", () => {
  result("5");
});
btn[10].addEventListener("click", () => {
  result("6");
});
btn[11].addEventListener("click", () => {
  result("-");
});
btn[12].addEventListener("click", () => {
  result("1");
});
btn[13].addEventListener("click", () => {
  result("2");
});
btn[14].addEventListener("click", () => {
  result("3");
});
btn[15].addEventListener("click", () => {
  result("+");
});
btn[16].addEventListener("click", () => {
  result("0");
});
btn[17].addEventListener("click", () => {
  result(".");
});
btn[18].addEventListener("click", () => {
  calculate(displayVal);
});
