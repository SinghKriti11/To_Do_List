const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");
const deadlineInput = document.getElementById("deadline");

function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        let taskText = inputBox.value;
        let deadline = deadlineInput.value;
        let timeLeft = "";
        if(deadline){
            let diff = new Date(deadline) - new Date();
            let hours = Math.floor(diff / (1000 * 60 * 60));
            if(hours < 0){
                timeLeft = " (Overdue)";
            } else {
                timeLeft = ` (${hours} hrs left)`;
            }
        }

        li.innerHTML = taskText + timeLeft;
        listContainer.prepend(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }

    inputBox.value= "";
    deadlineInput.value = "";
    saveData();
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === "li"){
        e.target.classList.toggle("checked");
        if(e.target.classList.contains("checked")){
            listContainer.appendChild(e.target);
        } else {
            listContainer.prepend(e.target);
        }
        saveData();
    }
    else if(e.target.tagName.toLowerCase() === "span"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);