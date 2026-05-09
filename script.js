function projectSelected() {
    const projectsSelect = document.getElementById('Projects');

    frameRate(60);

    keyPressedScript = function () {};

    if (projectsSelect.value === 'Bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;
    }
    else if (projectsSelect.value === 'Flags') {
        setupScript = function() {};
        drawScript = drawFlags;
    }
    else if (projectsSelect.value === 'Circle') {
        frameRate(100);
        setupScript = function() {};
        drawScript = drawCircle;
    }
    else if (projectsSelect.value === 'snake') {
        frameRate(10);
        setupScript = setupSnake;
        drawScript = drawSnake;
        keyPressedScript = keyPressedSnake;
    }

    setupScript();
}