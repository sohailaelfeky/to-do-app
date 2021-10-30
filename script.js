const tasks = [];
const taskList = document.querySelector(".task-lists");
const completeTasks = document.getElementsByClassName("done");
const activeTasks = document.getElementsByClassName("active");
const itemsLeft = document.querySelector(".items-left");
const completeBtn = document.querySelector(".complete-btn");
const activeBtn = document.querySelector(".active-btn");
const allBtn = document.querySelector(".all-btn");
let lightOrDark = false;
let selectedButton;

//darkmode and lightmode colors need to be fixed.

document
  .querySelector(".task-submit")
  .addEventListener("keypress", function (e) {
    let task;
    if (e.key === "Enter") {
      e.preventDefault();
      task = document.querySelector(".task-submit").value;
      tasks.push(task);
      let html = "";
      lightOrDark
        ? (html = `
      <div class="tasks active ts-light" id="task-${tasks.length}">  <input type="checkbox" class="checkbox" id="check-${tasks.length}"><p class="task-description light-mode-font">${task}<p>
      </div>`)
        : (html = `
      <div class="tasks active ts-dark" id="task-${tasks.length}">  <input type="checkbox" class="checkbox" id="check-${tasks.length}"><p class="task-description dark-mode-font">${task}<p>
      </div>`);
      taskList.insertAdjacentHTML("afterbegin", html);
      document.querySelector(".task-submit").value = "";

      itemsLeft.innerHTML = activeTasks.length;
    }
  });

function displayActiveTasks() {
  for (let i = 0; i < activeTasks.length; i++) {
    activeTasks[i].style.display = "flex";
  }
}

function displayCompleteTasks() {
  for (let i = 0; i < completeTasks.length; i++) {
    completeTasks[i].style.display = "flex";
  }
}

function hideCompleteTasks() {
  for (let i = 0; i < completeTasks.length; i++) {
    completeTasks[i].style.display = "none";
  }
}

function hideActiveTasks() {
  for (let i = 0; i < activeTasks.length; i++) {
    activeTasks[i].style.display = "none";
  }
}

function deleteCOmpletedTasks() {
  while (completeTasks.length > 0) {
    completeTasks[0].remove();
  }
}

function updateItemsLeft(arrayLength) {
  itemsLeft.innerHTML = parseInt(itemsLeft.innerHTML) - arrayLength;
}

document.querySelector(".set-lightmode").onclick = function () {
  lightOrDark = true;
  document.body.classList.remove("body-dark");
  document.body.classList.add("body-light");

  document.querySelector(".set-darkmode").classList.remove("iconoff");
  document.querySelector(".set-darkmode").classList.add("iconon");
  document.querySelector(".set-lightmode").classList.remove("iconon");
  document.querySelector(".set-lightmode").classList.add("iconoff");

  document.querySelector(".background-light").classList.remove("bgimgoff");
  document.querySelector(".background-light").classList.add("bgimgon");
  document.querySelector(".background-dark").classList.remove("bgimgon");
  document.querySelector(".background-dark").classList.add("bgimgoff");

  document.querySelector(".task-submit").classList.add("ts-light");
  document.querySelector(".task-submit").classList.remove("ts-dark");
  document.querySelector(".bottom-div").classList.add("ts-light");
  document.querySelector(".bottom-div").classList.remove("ts-dark");

  document.querySelector(".task-description").classList.add("light-mode-font");
  document
    .querySelector(".task-description")
    .classList.remove("dark-mode-font");

  var tempVarTwo = document.querySelectorAll(".task-description");
  tempVarTwo.forEach((e) => {
    e.classList.add("light-mode-font");
    e.classList.remove("dark-mode-font");
  });

  var tempVarOne = document.querySelectorAll(".tasks");
  tempVarOne.forEach((e) => {
    e.classList.add("ts-light");
    e.classList.remove("ts-dark");
  });

  document.querySelector(".all-btn").classList.add("light-mode-hover");
  document.querySelector(".active-btn").classList.add("light-mode-hover");
  document.querySelector(".complete-btn").classList.add("light-mode-hover");

  document.querySelector(".all-btn").classList.remove("dark-mode-hover");
  document.querySelector(".active-btn").classList.remove("dark-mode-hover");
  document.querySelector(".complete-btn").classList.remove("dark-mode-hover");
};

document.querySelector(".set-darkmode").onclick = function () {
  lightOrDark = false;

  document.body.classList.add("body-dark");
  document.body.classList.remove("body-light");

  document.querySelector(".set-darkmode").classList.remove("iconon");
  document.querySelector(".set-darkmode").classList.add("iconoff");
  document.querySelector(".set-lightmode").classList.add("iconon");
  document.querySelector(".set-lightmode").classList.remove("iconoff");

  document.querySelector(".background-light").classList.add("bgimgoff");
  document.querySelector(".background-light").classList.remove("bgimgon");
  document.querySelector(".background-dark").classList.add("bgimgon");
  document.querySelector(".background-dark").classList.remove("bgimgoff");

  document.querySelector(".task-submit").classList.remove("ts-light");
  document.querySelector(".task-submit").classList.add("ts-dark");
  document.querySelector(".bottom-div").classList.remove("ts-light");
  document.querySelector(".bottom-div").classList.add("ts-dark");

  var tempVarTwo = document.querySelectorAll(".task-description");
  tempVarTwo.forEach((e) => {
    e.classList.remove("light-mode-font");
    e.classList.add("dark-mode-font");
  });

  var tempVarOne = document.querySelectorAll(".tasks");
  tempVarOne.forEach((e) => {
    e.classList.remove("ts-light");
    e.classList.add("ts-dark");
  });

  document.querySelector(".all-btn").classList.remove("light-mode-hover");
  document.querySelector(".active-btn").classList.remove("light-mode-hover");
  document.querySelector(".complete-btn").classList.remove("light-mode-hover");

  document.querySelector(".all-btn").classList.add("dark-mode-hover");
  document.querySelector(".active-btn").classList.add("dark-mode-hover");
  document.querySelector(".complete-btn").classList.add("dark-mode-hover");
};

document.querySelector(".complete-btn").onclick = function () {
  hideActiveTasks();
  displayCompleteTasks();
  completeBtn.classList.add("active-btn-color");
  allBtn.classList.remove("active-btn-color");
  activeBtn.classList.remove("active-btn-color");
  selectedButton = ".complete-btn";
};

document.querySelector(".active-btn").onclick = function () {
  hideCompleteTasks();
  displayActiveTasks();
  completeBtn.classList.remove("active-btn-color");
  allBtn.classList.remove("active-btn-color");
  activeBtn.classList.add("active-btn-color");
  selectedButton = ".active-btn";
};

document.querySelector(".all-btn").onclick = function () {
  displayActiveTasks();
  displayCompleteTasks();
  completeBtn.classList.remove("active-btn-color");
  allBtn.classList.add("active-btn-color");
  activeBtn.classList.remove("active-btn-color");
  selectedButton = ".all-btn";
};

document.onclick = function (event) {
  //fix
  if (event.target.classList.contains("checkbox") && event.target.checked) {
    event.target.parentNode.classList.add("done");
    event.target.parentNode.classList.remove("active");
    event.target.nextElementSibling.style.color = "hsl(236, 9%, 61%)";
    event.target.nextElementSibling.style.textDecoration = "line-through";
    itemsLeft.innerHTML = activeTasks.length;
  } else if (
    event.target.classList.contains("checkbox") &&
    !event.target.checked
  ) {
    event.target.parentNode.classList.remove("done");
    event.target.parentNode.classList.add("active");
    event.target.nextElementSibling.style.color = "hsl(234, 11%, 52%)";
    event.target.nextElementSibling.style.textDecoration = "none";
    itemsLeft.innerHTML = activeTasks.length;
  }
  if (selectedButton === ".active-btn") {
    hideCompleteTasks();
    displayActiveTasks();
  } else if (selectedButton === ".complete-btn") {
    hideActiveTasks();
    displayCompleteTasks();
  }
};

document.querySelector(".clear-complete").onclick = function () {
  deleteCOmpletedTasks();
  itemsLeft.innerHTML = activeTasks.length;
};

// function some(array, temp) {
//   for (let i = 0; i < array.length; i++) {
//     if (temp(array[i])) {
//       return true;
//     }
//   }
// }
// function isEven(element) {
//   if (element % 2 === 0) return true;
// }

// let array = [1, 2, 3, 4];
// some(array, isEven);
