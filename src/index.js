import { handleAddProject } from "./handleProjectForm";
import { makeBtnSelected } from "./makeBtnSelected";
import { handleProjectNavigation } from "./handleProjectNavigation";
import { handleByDay } from "./handleByDay";
import { renderSidebarProjects } from "./handleSidebarProjects";
import { Project, projects } from "./projectsData";

function InitializeData() {
  if (JSON.parse(localStorage.getItem("projects")))
    projects = JSON.parse(localStorage.getItem("projects"));
  projects = projects.map((curr) => new Project(curr.name, curr.taskList));
  renderSidebarProjects();
  handleByDay();
}
InitializeData();

document.addEventListener("click", handleClick);

function handleClick(e) {
  if (e.target.classList.contains("sidebar-btn")) {
    makeBtnSelected(e.target);
  }
  if (e.target.classList.contains("sidebar-project")) {
    handleProjectNavigation(e);
  } else if (e.target.classList.contains("sidebar-day")) {
    handleByDay(e);
  }
}
