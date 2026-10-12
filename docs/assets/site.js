const project = document.querySelector(".featured-project");
const actionLabel = project?.querySelector(".summary-action-label");

function updateProjectState() {
  if (actionLabel && project) actionLabel.textContent = project.open ? "Close project" : "Explore project";
}

project?.addEventListener("toggle", updateProjectState);
project?.querySelectorAll("summary a").forEach((link) => {
  link.addEventListener("click", (event) => event.stopPropagation());
});
updateProjectState();
