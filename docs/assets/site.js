const project = document.querySelector(".featured-project");
const state = project?.querySelector(".project-state");

function updateProjectState() {
  if (state && project) state.textContent = project.open ? "Open" : "Closed";
}

project?.addEventListener("toggle", updateProjectState);
updateProjectState();
