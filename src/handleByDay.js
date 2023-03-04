import { projects } from "./projectsData";
import { createTaskDiv } from "./createTaskDiv";
import { hideAll } from "./hideAll";
import { deleteTaskByClick } from "./handleProjectNavigation";
import { toggleImp } from "./handleProjectNavigation";

const contentByDay = document.getElementById("content-by-day");

export function handleByDay(e) {
  hideAll();
  if (!e) {
    renderByDay(1000, false);
    return;
  }
  if (e.target.id === "all-time") renderByDay(1000, false);
  else if (e.target.id === "one-day") renderByDay(1, false);
  else if (e.target.id === "seven-day") renderByDay(7, false);
  else if (e.target.id === "important") renderByDay(1000, true);
}

let renderTill;
let renderImp;

function renderByDay(noOfDays, important) {
  renderTill = noOfDays;
  renderImp = important;
  contentByDay.style.display = "block";

  // HEADING
  const heading = document.createElement("h1");
  let headingText = "";
  if (important) headingText = "IMPORTANT";
  else if (noOfDays === 1000) headingText = "ALL TIME";
  else if (noOfDays === 7) headingText = "THIS WEEK / SEVEN DAYS";
  else if (noOfDays === 1) headingText = "TODAY";
  heading.textContent = headingText;

  const fragment = new DocumentFragment();
  fragment.append(heading);
  let isTaskEmpty = true;
  projects.forEach((project) => {
    let array = project.taskList;
    array.forEach((curr) => {
      let toCalculate = new Date();
      toCalculate.setDate(toCalculate.getDate() + noOfDays);
      let taskDate = new Date(curr.date);
      if (taskDate > toCalculate) return;
      if (important && curr.isImportant === false) return;
      const temp = createTaskDiv(
        curr.name,
        curr.description,
        curr.isCompleted,
        curr.isImportant,
        curr.date,
        project.name
      );
      fragment.append(temp);
      isTaskEmpty = false;
    });
  });

  if (isTaskEmpty) {
    const emptyDiv = document.createElement("div");
    emptyDiv.classList.add("empty-div");
    const emptyDivImage = document.createElement("img");
    emptyDivImage.src =
      "https://media3.giphy.com/media/3oFzm6E9URrNKG81Q4/giphy.gif?cid=ecf05e47c63lkc5k817osqhr4quogidjxqd60wxwv046aoa9&rid=giphy.gif&ct=g";
    emptyDiv.append(emptyDivImage);
    fragment.append(emptyDiv);
  }

  contentByDay.replaceChildren(fragment);

  localStorage.setItem("projects", JSON.stringify(projects));
}
document.addEventListener("click", handlePageClickByDay);
function handlePageClickByDay(e) {
  if (document.getElementById("content-by-day").style.display === "none")
    return;
  if (e.target.classList.contains("delete-task-btn")) {
    deleteTaskByClick(e);
    renderByDay(renderTill, renderImp);
  } else if (e.target.classList.contains("star")) {
    toggleImp(e);
    renderByDay(renderTill, renderImp);
  }
}
