// No-1
// 1. Click করে color change করো:একটা button বানাও। button এ click করলে প্রথম li এর text color red হবে।

// const { createElement } = require("react");

// const fruitesList = document.querySelectorAll("li");

// document.getElementById("btn").addEventListener("click", function () {
//   fruitesList.style.color = "red";
// });

// No-2
// 2. Double click করে text বড় করো:button এ double click করলে প্রথম li তে text-4xl class যোগ হবে।

// const fruitesList = document.querySelectorAll("li");
// const btn = document.getElementById("btn");

// btn.addEventListener("dblclick", function () {
//   fruitesList[0].classList.add("text-4xl");
// });

// No-3
// 3. Toggle class ব্যবহার করো:button এ click করলে li তে class যোগ হবে, আবার click করলে class উঠে যাবে।

// const fruitesList = document.querySelectorAll("li");
// const btn = document.getElementById("btn");

// btn.addEventListener("dblclick", function () {
//   fruitesList[0].classList.add("text-4xl");
// });

// btn.addEventListener("click", function () {
//   fruitesList[0].classList.remove("text-4xl");
// });

// No-4
// 4. নতুন fruit যোগ করো:button এ click করলে list এর শেষে Apple নামের নতুন li যোগ হবে।

// const listItem = document.getElementById("fruitesList");
// console.log(listItem);

// const btn = document.getElementById("btn");
// console.log(btn);

// const li = document.createElement("li");
// console.log(li);

// li.innerText = "Orang";
// console.log(li);

// btn.addEventListener("click", function () {
//   const name = "siam";
//   listItem.appendChild(li);
// });

// No-5
// 5. Input থেকে value নিয়ে li বানাও:input এ যা লিখবে, button এ click করলে সেটা নতুন li হিসেবে list এ যোগ হবে।

// const listItem = document.getElementById("fruitesList");
// const btn = document.getElementById("btn");

// btn.addEventListener("click", function () {
//   const inputText = document.getElementById("inputText");
//   const li = document.createElement("li");
//   li.innerText = inputText.value;
//   listItem.appendChild(li);

//   inputText.value = "";
// });

// No-6
// 6. Last li remove করো:button এ click করলে list এর শেষ li delete হবে।

const listItem = document.getElementById("fruitesList");

removeBtn.addEventListener("click", function () {
  const lastLi = listItem.lastElementChild;

  if (lastLi) {
    listItem.removeChild(lastLi);
  }
});

// No-7
// 7. সব li এর color change করো:button এ click করলে সব li এর color blue হবে।

colorBtn.addEventListener("click", function () {
  const allLi = listItem.children;

  for (let li of allLi) {
    li.style.color = "blue";
  }
});
