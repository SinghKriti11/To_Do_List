const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const deadlineInput = document.getElementById("deadline");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }