export function createTaskDiv(
  title,
  desc,
  isCompleted,
  isImportant,
  date,
  projectName
) {
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task-div");
  if (isCompleted) taskDiv.classList.add("completed");

  const heading = document.createElement("h2");
  heading.textContent = title;

  const description = document.createElement("h2");
  description.textContent = desc;

  const star = document.createElement("i");
  star.classList.add("fa", "fa-star", "star");
  star.setAttribute("data", title);
  star.setAttribute("projectName", projectName);
  if (isImportant) star.classList.add("golden-star");

  const dateEle = document.createElement("h2");
  dateEle.textContent = date;

  const deleteTaskBtn = document.createElement("button");
  deleteTaskBtn.classList.add("delete-task-btn");
  deleteTaskBtn.setAttribute("data", title);
  deleteTaskBtn.textContent = "DELETE TASK";
  deleteTaskBtn.setAttribute("projectName", projectName);

  taskDiv.appendChild(heading);
  taskDiv.appendChild(description);
  taskDiv.appendChild(star);
  taskDiv.appendChild(dateEle);
  taskDiv.appendChild(deleteTaskBtn);

  return taskDiv;
}
