export function makeBtnSelected(element) {
  const allBtn = document.querySelectorAll(".sidebar-btn");
  allBtn.forEach((ele) => {
    ele.classList.remove("selected");
  });
  element.classList.add("selected");
}
