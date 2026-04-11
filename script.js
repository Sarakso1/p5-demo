function projectSelected() {
    const projectsSelect = document.getElementById('Projects');

    if (projectsSelect.value === 'Bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;
    }

    setupScript()
}