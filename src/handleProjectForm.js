import { makeNewProject } from "./projectsData";
import { renderSidebarProjects } from "./handleSidebarProjects";

const addProjectBtn = document.getElementById("add-project-btn");
const projectForm = document.getElementById("add-project-form");
const projectName = document.getElementById("project-name");
const addNewProjectBtn = document.getElementById("new-project-btn");
const cancelProjectBtn = document.getElementById("cancel-project-btn");

addProjectBtn.addEventListener("click", handleAddProject);
export function handleAddProject(e) {
  e.preventDefault();
  projectForm.style.display = "block";
}

cancelProjectBtn.addEventListener("click", hideForm);
function hideForm(e) {
  e.preventDefault();
  projectForm.style.display = "none";
}

addNewProjectBtn.addEventListener("click", handleAddButton);
function handleAddButton(e) {
  e.preventDefault();
  if (!projectName.value) return;
  makeNewProject(projectName.value.trim());
  projectName.value = "";
  hideForm(e);
  renderSidebarProjects();
}
