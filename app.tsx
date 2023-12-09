let inputBox = document.getElementById("datainput");
let listContainer = document.getElementById("list-container");

function AddTask() {
  if (
    inputBox instanceof HTMLInputElement &&
    listContainer instanceof HTMLElement
  ) {
    if (inputBox.value === "") {
      alert("You  must  enter something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = inputBox.value;
      listContainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "×";
      li.appendChild(span);
    }
    saveData();
    inputBox.value = "";
  }
}

listContainer?.addEventListener(
  "click",
  function (e) {
    const { target } = e;
    if (target instanceof HTMLElement) {
      if (target.tagName === "LI") {
        target.classList.toggle("checked");
        saveData();
      } else if (target.tagName === "SPAN") {
        target.parentElement?.remove();
        saveData();
      }
    }
  },
  false
);

function saveData() {
  if (listContainer instanceof HTMLElement) {
    localStorage.setItem("data", listContainer.innerHTML);
  }
}

function showData() {
  if (listContainer instanceof HTMLElement) {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      listContainer.innerHTML = storedData;
    }
  }
}
showData();
