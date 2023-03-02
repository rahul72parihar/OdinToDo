import { handleAddProject } from "./handleProjectForm";
import { hideAll } from "./hideAll";
import { makeBtnSelected } from "./makeBtnSelected";

document.addEventListener("click", handleClick);

function handleClick(e) {
  console.log(e.target);
  if (e.target.classList.contains("sidebar-btn")) {
    makeBtnSelected(e.target);
  }
  if (e.target.classList.contains("sidebar-project")) {
    hideAll();
  }
}
