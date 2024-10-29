const taskList = document.getElementsByClassName("tasks-list")[0] ; 
// console.log(taskList.innerHTML) ; 
const inputBox = document.getElementById("input-box") ; 

function addTask(e){
    //console.log("e") ; 
    if(inputBox.value === ""){
        alert("Please write any task.") ; 
    }
    else{
        let li = document.createElement("li") ; 
        li.innerHTML = inputBox.value ; 
        taskList.appendChild(li) ; 
        console.log("clicked button ") ; 
        let span = document.createElement("span") ; 
        span.innerHTML = "\u00d7" ; 
        li.appendChild(span) ; 
    }
    inputBox.value = "" ;
    saveData() ; 
}

document.getElementById("text-submit").addEventListener("click" , addTask) ; 
document.querySelector("#input-box").addEventListener("keydown" , function(e){
    if(e.key == "Enter"){
        addTask(e) ; 
    }
}) ; 

document.querySelector(".tasks-list").addEventListener("click" , function(e){
    console.log(e.target.classList) ; 
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked") ;
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove() ; 
    } 
    saveData() ; 
}) ; 


function saveData(){
    localStorage.setItem("data" , taskList.innerHTML) ; 
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data") ; 
}
showData() ; 


