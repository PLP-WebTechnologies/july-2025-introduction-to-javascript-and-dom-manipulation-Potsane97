// ------------------------------
// Part 1: Basics
// ------------------------------
function checkVotingAge() {
  let age = prompt("Enter your age:");
  let result = (age >= 18) ? "You can vote ✅" : "You are too young ❌";
  document.getElementById("ageResult").textContent = result;
}

function findLargest() {
  let num1 = Number(prompt("Enter first number:"));
  let num2 = Number(prompt("Enter second number:"));
  let result = (num1 > num2) ? num1 : num2;
  document.getElementById("largestResult").textContent = "Largest is: " + result;
}

function greetUser() {
  let hour = new Date().getHours();
  let greeting = hour < 12 ? "Good Morning!" :
                 hour < 18 ? "Good Afternoon!" : "Good Evening!";
  document.getElementById("greetResult").textContent = greeting;
}

// ------------------------------
// Part 2: Functions
// ------------------------------
function addNumbers(a, b) {
  return a + b;
}

function formatName(first, last) {
  return `${last}, ${first}`;
}

function showSum() {
  let a = Number(prompt("Enter first number:"));
  let b = Number(prompt("Enter second number:"));
  document.getElementById("sumResult").textContent = "Sum: " + addNumbers(a, b);
}

function showFormattedName() {
  let first = prompt("Enter first name:");
  let last = prompt("Enter last name:");
  document.getElementById("nameResult").textContent = formatName(first, last);
}

// ------------------------------
// Part 3: Loops
// ------------------------------
function printNumbers() {
  let output = "";
  for (let i = 1; i <= 10; i++) {
    output += i + " ";
  }
  document.getElementById("numbersResult").textContent = output;
}

function countDown() {
  let output = "";
  let i = 5;
  while (i >= 0) {
    output += i + " ";
    i--;
  }
  document.getElementById("countdownResult").textContent = output;
}

function showStudents() {
  let students = ["Alice", "Bob", "Charlie", "Diana"];
  let list = document.getElementById("studentList");
  list.innerHTML = "";
  students.forEach(student => {
    let li = document.createElement("li");
    li.textContent = student;
    list.appendChild(li);
  });
}

// ------------------------------
// Part 4: DOM Manipulation
// ------------------------------
function changeText() {
  document.getElementById("textPara").textContent = "The text has changed!";
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

function addTask() {
  let input = document.getElementById("taskInput");
  if (input.value.trim() !== "") {
    let li = document.createElement("li");
    li.textContent = input.value;

    let btn = document.createElement("button");
    btn.textContent = "❌";
    btn.style.marginLeft = "10px";
    btn.onclick = () => li.remove();

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);
    input.value = "";
  }
}
