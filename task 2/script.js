// Form Validation

document
.getElementById("contactForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    let name =
    document.getElementById("name").value.trim();

    let email =
    document.getElementById("email").value.trim();

    let message =
    document.getElementById("message");

    let emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(name === "" || email === ""){
        message.style.color = "red";
        message.innerText =
        "All fields are required!";
        return;
    }

    if(!emailPattern.test(email)){
        message.style.color = "red";
        message.innerText =
        "Enter a valid email address!";
        return;
    }

    message.style.color = "green";
    message.innerText =
    "Form submitted successfully!";
});


// To-Do List

function addTask(){

    let taskInput =
    document.getElementById("taskInput");

    let task =
    taskInput.value.trim();

    if(task === ""){
        alert("Please enter a task");
        return;
    }

    let li =
    document.createElement("li");

    li.innerHTML = `
        ${task}
        <button onclick="removeTask(this)">
            Delete
        </button>
    `;

    document
    .getElementById("taskList")
    .appendChild(li);

    taskInput.value = "";
}

function removeTask(button){
    button.parentElement.remove();
}