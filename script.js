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
    else if (projectsSelect.value === 'Circle') {
        setupScript = setupCircle;
        drawScript = drawCircle;
    }
    else if (projectsSelect.value === 'snake') {
        setupScript = setupSnake;
        drawScript = drawSnake;
    }

    setupScript();
}