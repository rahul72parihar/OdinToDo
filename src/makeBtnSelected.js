export function makeBtnSelected(element) {
  const allBtn = document.querySelectorAll(".sidebar-btn");
  allBtn.forEach((ele) => {
    ele.classList.remove("selected");
  });
  console.log(element);
  element.classList.add("selected");
}
