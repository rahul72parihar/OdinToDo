export class Project {
  constructor(name, taskList) {
    this.name = name;
    this.taskList = taskList;
  }
  addTask(task) {
    this.taskList.push(task);
  }
  removeTask(name) {
    this.taskList = this.taskList.filter((element) => {
      return element.name !== name;
    });
  }
  toggleImportantOfTask(name) {
    this.taskList = this.taskList.map((element) => {
      if (element.name === name) {
        element.isImportant = !element.isImportant;
      }
      return element;
    });
  }
}

export class Task {
  constructor(name, description, date, isImportant) {
    this.name = name;
    this.description = description;
    this.date = date;
    this.isCompleted = false;
    this.isImportant = isImportant;
  }
}
export let projects = [];

export function makeNewProject(name) {
  let temp = new Project(name, []);
  let isProjectUnique = true;
  projects.forEach((project) => {
    if (name.toLowerCase() === project.name.toLowerCase()) {
      isProjectUnique = false;
      return;
    }
  });
  if (!isProjectUnique) return;
  projects.push(temp);
}
export function addNewTask(projectName, name, desc, date, imp) {
  let temp = new Task(name, desc, date, imp);
  const i = findCurrIndex(projectName);
  projects[i].taskList.push(temp);
}
export function deleteProjectFromArray(name) {
  projects = projects.filter((curr) => curr.name !== name);
}
function findCurrIndex(projectName) {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].name === projectName) return i;
  }
}
