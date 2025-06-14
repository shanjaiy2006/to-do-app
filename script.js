const taskInput = document.getElementById("taskInput");
const submit = document.getElementById("submit");
const taskList = document.getElementById("taskList");
const completedList = document.getElementById("completedList");

submit.addEventListener("click", () => {
  const taskValue = taskInput.value.trim();
  if (taskValue === "") {
    alert("Please enter a task!");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskValue;

  const completeBtn = document.createElement("button");
  completeBtn.textContent = "Complete";
  completeBtn.className = "complete-btn";

  completeBtn.addEventListener("click", () => {
    const completedTask = document.createElement("li");
    completedTask.textContent = taskValue;
    completedTask.classList.add("completed");
    completedList.appendChild(completedTask);
    taskList.removeChild(li);
  });

  li.appendChild(completeBtn);
  taskList.appendChild(li);
  taskInput.value = "";
});
