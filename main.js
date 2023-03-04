(()=>{"use strict";class t{constructor(t,e){this.name=t,this.taskList=e}addTask(t){this.taskList.push(t)}removeTask(t){this.taskList=this.taskList.filter((e=>e.name!==t))}toggleImportantOfTask(t){this.taskList=this.taskList.map((e=>(e.name===t&&(e.isImportant=!e.isImportant),e)))}}class e{constructor(t,e,n,a){this.name=t,this.description=e,this.date=n,this.isCompleted=!1,this.isImportant=a}}let n=[];const a=document.getElementById("sidebar-projects-container");function s(){const t=new DocumentFragment;n.forEach((e=>{const n=document.createElement("div");n.classList.add("sidebar-btn"),n.classList.add("sidebar-project"),n.setAttribute("id",e.name);const a=document.createElement("h2");a.textContent=e.name,n.appendChild(a),t.appendChild(n)})),a.replaceChildren(t),localStorage.setItem("projects",JSON.stringify(n))}const o=document.getElementById("content-task"),c=document.getElementById("content-project"),d=document.getElementById("add-project-form"),i=document.getElementById("content-by-day");function l(){o.style.display="none",c.style.display="none",d.style.display="none",i.style.display="none"}function r(t,e,n,a,s,o){const c=document.createElement("div");c.classList.add("task-div"),n&&c.classList.add("completed");const d=document.createElement("h2");d.textContent=t;const i=document.createElement("h2");i.textContent=e;const l=document.createElement("i");l.classList.add("fa","fa-star","star"),l.setAttribute("data",t),l.setAttribute("projectName",o),a&&l.classList.add("golden-star");const r=document.createElement("h2");r.textContent=s;const m=document.createElement("button");return m.classList.add("delete-task-btn"),m.setAttribute("data",t),m.textContent="DELETE TASK",m.setAttribute("projectName",o),c.appendChild(d),c.appendChild(i),c.appendChild(l),c.appendChild(r),c.appendChild(m),c}const m=document.getElementById("content-project-heading"),u=document.getElementById("add-task-form"),p=document.getElementById("task-name"),g=document.getElementById("task-desc"),y=document.getElementById("task-date"),E=document.getElementById("task-imp"),f=document.getElementById("new-task-btn"),h=document.getElementById("content-project-list");let k;function L(){let t=n[k].taskList;const e=new DocumentFragment;t.forEach((t=>{const a=r(t.name,t.description,t.isCompleted,t.isImportant,t.date,n[k].name);e.append(a)})),h.replaceChildren(e),localStorage.setItem("projects",JSON.stringify(n))}function I(t){const e=v(t.target.getAttribute("projectName"));console.log("i -> ",e),console.log(n[e]),console.log(t.target.getAttribute("data")),n[e].removeTask(t.target.getAttribute("data"))}function b(t){const e=v(t.target.getAttribute("projectName"));n[e].toggleImportantOfTask(t.target.getAttribute("data")),console.log(t.target)}function v(t){for(let e=0;e<n.length;e++)if(n[e].name===t)return e}f.addEventListener("click",(function(t){p.value&&y.value&&(function(t,a,s,o,c){console.log(t);let d=new e(a,s,o,c);const i=function(t){for(let e=0;e<n.length;e++)if(n[e].name===t)return e}(t);console.log(i),n[i].taskList.push(d)}(t.target.getAttribute("projectName"),p.value,g.value,y.value,E.checked),u.reset(),L())})),document.addEventListener("click",(function(t){"none"!==document.getElementById("content-project").style.display&&(t.target.classList.contains("delete-task-btn")&&(I(t),L()),t.target.classList.contains("star")&&(b(t),L()))}));const j=document.getElementById("add-project-btn"),B=document.getElementById("add-project-form"),C=document.getElementById("project-name"),A=document.getElementById("new-project-btn"),S=document.getElementById("cancel-project-btn"),w=document.getElementById("delete-project");function N(t){t.preventDefault(),B.style.display="none"}j.addEventListener("click",(function(t){t.preventDefault(),B.style.display="block"})),S.addEventListener("click",N),w.addEventListener("click",(function(){var t;t=n[k].name,n=n.filter((e=>e.name!==t)),s(),l()})),A.addEventListener("click",(function(e){e.preventDefault(),C.value&&(function(e){let a=new t(e,[]),s=!0;n.forEach((t=>{e.toLowerCase()!==t.name.toLowerCase()||(s=!1)})),s&&n.push(a)}(C.value.trim()),C.value="",N(e),s())}));const D=document.getElementById("content-by-day");function T(t){l(),t?"all-time"===t.target.id?J(1e3,!1):"one-day"===t.target.id?J(1,!1):"seven-day"===t.target.id?J(7,!1):"important"===t.target.id&&J(1e3,!0):J(1e3,!1)}let x,O;function J(t,e){x=t,O=e,console.log(t,e),D.style.display="block";const a=document.createElement("h1");let s="";e?s="IMPORTANT":1e3===t?s="ALL TIME":7===t?s="THIS WEEK / SEVEN DAYS":1===t&&(s="TODAY"),a.textContent=s;const o=new DocumentFragment;o.append(a);let c=!0;if(n.forEach((n=>{n.taskList.forEach((a=>{let s=new Date;if(s.setDate(s.getDate()+t),new Date(a.date)>s)return;if(e&&!1===a.isImportant)return;const d=r(a.name,a.description,a.isCompleted,a.isImportant,a.date,n.name);o.append(d),c=!1}))})),c){const t=document.createElement("div");t.classList.add("empty-div");const e=document.createElement("img");e.src="https://media3.giphy.com/media/3oFzm6E9URrNKG81Q4/giphy.gif?cid=ecf05e47c63lkc5k817osqhr4quogidjxqd60wxwv046aoa9&rid=giphy.gif&ct=g",t.append(e),o.append(t)}D.replaceChildren(o),localStorage.setItem("projects",JSON.stringify(n))}document.addEventListener("click",(function(t){"none"!==document.getElementById("content-by-day").style.display&&(t.target.classList.contains("delete-task-btn")?(I(t),J(x,O)):t.target.classList.contains("star")&&(b(t),J(x,O)))})),JSON.parse(localStorage.getItem("projects"))&&(n=JSON.parse(localStorage.getItem("projects"))),n=n.map((e=>new t(e.name,e.taskList))),s(),T(),console.log(n),document.addEventListener("click",(function(t){var e;t.target.classList.contains("sidebar-btn")&&(e=t.target,document.querySelectorAll(".sidebar-btn").forEach((t=>{t.classList.remove("selected")})),e.classList.add("selected")),t.target.classList.contains("sidebar-project")?function(t){l(),function(t){let e;for(f.setAttribute("projectName",t),e=0;e<n.length&&t!==n[e].name;e++);var a;k=e,m.textContent="",u.reset(),a=n[k],m.textContent=a.name,L()}(t.target.id),document.getElementById("content-project").style.display="block"}(t):t.target.classList.contains("sidebar-day")&&T(t)}))})();