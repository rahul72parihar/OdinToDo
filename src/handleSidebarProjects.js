import { projects } from "./projectsData";

const sideBarProjects = document.getElementById("sidebar-projects-container");

export function renderSidebarProjects() {
  const fragment = new DocumentFragment();
  projects.forEach((project) => {
    const divContainer = document.createElement("div");
    divContainer.classList.add("sidebar-btn");
    divContainer.classList.add("sidebar-project");
    divContainer.setAttribute("id", project.name);

    const title = document.createElement("h2");
    title.textContent = project.name;
    divContainer.appendChild(title);

    fragment.appendChild(divContainer);
  });
  sideBarProjects.replaceChildren(fragment);
  localStorage.setItem("projects", JSON.stringify(projects));
}
