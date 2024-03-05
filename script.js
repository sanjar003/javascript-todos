const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim();
  console.log(taskText)
  
  if (taskText === "") {
    alert("kandai e");
  } else {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
     <span>${taskText}</span>
     <button class="delete">Удалить</button>
    `;
    taskInput.value = "";
    taskList.appendChild(listItem);

    const deleteButton = listItem.querySelector(".delete");
    deleteButton.addEventListener("click", function () {
      taskList.removeChild(listItem);
    });
  }
});
