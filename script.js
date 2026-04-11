function projectSelected() {
    const projectsSelect = document.getElementById('Projects');

    if (projectsSelect.value === 'Bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;
    }
    else if (projectsSelect.value === 'Flags') {
        setupScript = function() {};
        drawScript = drawFlags;
    }

    setupScript();
}