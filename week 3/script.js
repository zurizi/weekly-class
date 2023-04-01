let newTaskInput = document.getElementById("newTaskInput")
let addTaskButton = document.getElementById("addTaskButton")
let taskList = document.getElementById("taskList")

addTaskButton.addEventListener("click", function(event){
    event.preventDefault()
    
    let isiTeks = newTaskInput.value;
    if(isiTeks.trim() === ""){
        alert("masukkan task tidak boleh kosong")
        return
    }

    let newTask = document.createElement("li")
    newTask.innerHTML = `
        <input type="checkbox"/>
        <p>${isiTeks}</p>
        <button class="hapus">Delete</button>
    `;
    taskList.appendChild(newTask);

    newTaskInput.value = "";
})

taskList.addEventListener("click", function(event){
    if(event.target.type === "checkbox"){
        let taskItem = event.target.parentElement;
        taskItem.classList.toggle("complete")
    } else if (event.target.classList.contains("hapus")){
        event.target.parentElement.remove()
    }
})
