let inputBox = document.getElementById("datainput");
let listContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value === "") {
    alert("You  must  enter something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML ='×';
    li.appendChild(span);
   
  };
  inputBox.value = "";
  saveData();
};

listContainer.addEventListener('click' , function (e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");  
        saveData()
    }  
  else if (e.target.tagName === ('SPAN')){
    e.target.parentElement.remove()
    saveData() 
}
},false);

function saveData(){
localStorage.setItem("data",listContainer.innerHTML)
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data")

}
showData();