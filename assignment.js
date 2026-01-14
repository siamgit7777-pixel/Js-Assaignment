// No-1
// 1. Click করে color change করো:একটা button বানাও। button এ click করলে প্রথম li এর text color red হবে।

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

// me
const listItem = document.getElementById("fruitesList");
console.log(listItem);

const li = document.createElement("li");
console.log(li);

li.innerText = "Orang";
console.log(li);
listItems.appendChild(li);

// const listItems = document.getElementById("fruitesList");
// console.log(listItems);

// const li = document.createElement("li");
// console.log(li);

// li.innerText = "Orang";
// console.log(li);

// listItems.appendChild(li);
