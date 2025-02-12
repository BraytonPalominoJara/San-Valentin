let noCount = 0;
const noButton = document.getElementById('no');
const pregunta = document.getElementById('pregunta');

noButton.addEventListener('click', function() {
    noCount++;
    switch(noCount) {
        case 1:
            pregunta.textContent = "¿Estás segura?";
            break;
        case 2:
            pregunta.textContent = "Por favorcito";
            break;
        case 3:
            pregunta.textContent = "No tomaré un no por respuesta";
            noButton.style.display = 'none';
            break;
    }
});

