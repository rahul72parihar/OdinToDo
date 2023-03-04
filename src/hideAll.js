const contentTask = document.getElementById("content-task");
const contentProject = document.getElementById("content-project");
const addProjectForm = document.getElementById("add-project-form");
const contentByDay = document.getElementById("content-by-day");

export function hideAll() {
  contentTask.style.display = "none";
  contentProject.style.display = "none";
  addProjectForm.style.display = "none";
  contentByDay.style.display = "none";
}
