class Project {
  constructor(name) {
    this.name = name;
    this.taskList = [];
  }
  addTask(task) {
    this.taskList.push(task);
  }
  removeTask(name) {
    this.taskList.filter((element) => {
      return element.name !== name;
    });
  }
}
class Task {
  constructor(name, subheading, date, isCompleted) {
    this.name = name;
    this.subheading = subheading;
    this.date = date;
    this.isCompleted = isCompleted;
  }
}
export const projects = [];
export function makeNewProject(name) {
  let temp = new Project(name);
  let isProjectUnique = true;
  projects.forEach((project) => {
    if (name.toLowerCase() === project.name.toLowerCase()) {
      isProjectUnique = false;
      return;
    }
  });
  if (!isProjectUnique) return;
  projects.push(temp);
  //   console log
  console.log(projects);
}
