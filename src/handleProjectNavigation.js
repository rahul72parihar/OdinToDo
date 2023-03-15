import { hideAll } from "./hideAll";
import { projects } from "./projectsData";
import { addNewTask } from "./projectsData";
import { renderSidebarProjects } from "./handleSidebarProjects";
import { deleteProjectFromArray } from "./projectsData";
import { createTaskDiv } from "./createTaskDiv";
import { Project } from "./projectsData";

const projectHeading = document.getElementById("content-project-heading");

const taskForm = document.getElementById("add-task-form");

const formTaskName = document.getElementById("task-name");
const formTaskDesc = document.getElementById("task-desc");
const formTaskDate = document.getElementById("task-date");
const formTaskImp = document.getElementById("task-imp");
const formTaskSubmit = document.getElementById("new-task-btn");
const taskListDiv = document.getElementById("content-project-list");

let currIndex;

export function handleProjectNavigation(e) {
  hideAll();
  openProject(e.target.id);
  document.getElementById("content-project").style.display = "block";
}
function openProject(projectName) {
  //search for the project
  formTaskSubmit.setAttribute("projectName", projectName);
  let i;
  for (i = 0; i < projects.length; i++) {
    if (projectName === projects[i].name) break;
  }
  //disable pastDate Selection
  let today = new Date().toISOString().split("T")[0];
  formTaskDate.setAttribute("min", today);

  currIndex = i;
  clearProjectContent();
  renderProject(projects[currIndex]);
}

function clearProjectContent() {
  projectHeading.textContent = "";
  taskForm.reset();
}

function renderProject(curr) {
  projectHeading.textContent = curr.name;
  renderTasks();
}

formTaskSubmit.addEventListener("click", handleFormSubmit);

function handleFormSubmit(e) {
  if (!formTaskName.value || !formTaskDate.value) return;
  addNewTask(
    e.target.getAttribute("projectName"),
    formTaskName.value,
    formTaskDesc.value,
    formTaskDate.value,
    formTaskImp.checked
  );
  taskForm.reset();
  renderTasks();
}

function renderTasks() {
  let array = projects[currIndex].taskList;
  const fragment = new DocumentFragment();
  array.forEach((curr) => {
    const temp = createTaskDiv(
      curr.name,
      curr.description,
      curr.isCompleted,
      curr.isImportant,
      curr.date,
      projects[currIndex].name
    );
    fragment.append(temp);
  });
  taskListDiv.replaceChildren(fragment);
  localStorage.setItem("projects", JSON.stringify(projects));
}

//Delete project
export function deleteProject() {
  deleteProjectFromArray(projects[currIndex].name);
  renderSidebarProjects();
  hideAll();
}

//Delete Task in the current project
document.addEventListener("click", handlePageClick);
function handlePageClick(e) {
  if (document.getElementById("content-project").style.display === "none")
    return;
  if (e.target.classList.contains("delete-task-btn")) {
    deleteTaskByClick(e);
    renderTasks();
  }
  if (e.target.classList.contains("star")) {
    toggleImp(e);
    renderTasks();
  }
}

export function deleteTaskByClick(e) {
  const i = projectIndex(e.target.getAttribute("projectName"));
  projects[i].removeTask(e.target.getAttribute("data"));
}

export function toggleImp(e) {
  const i = projectIndex(e.target.getAttribute("projectName"));
  projects[i].toggleImportantOfTask(e.target.getAttribute("data"));
}

function projectIndex(name) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === name) return i;
  }
}
