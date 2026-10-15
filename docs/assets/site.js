document.querySelectorAll(".featured-project").forEach((project) => {
  const actionLabel = project.querySelector(".summary-action-label");
  project.open = false;

  function updateProjectState() {
    if (actionLabel) actionLabel.textContent = project.open ? "Close project" : "Explore project";
  }

  project.addEventListener("toggle", updateProjectState);
  project.querySelectorAll("summary a").forEach((link) => {
    link.addEventListener("click", (event) => event.stopPropagation());
  });
  updateProjectState();
});
