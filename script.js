document.addEventListener('DOMContentLoaded', () => {
    const siBtn = document.getElementById('siBtn');
    const noBtn = document.getElementById('noBtn');
    const mensaje = document.getElementById('mensaje');
    const buttonsContainer = document.querySelector('.buttons');
    const imagenRespuesta = document.getElementById('imagenRespuesta');

    siBtn.addEventListener('click', () => {
        const sunflower = document.querySelector('.sunflower');
        sunflower.style.transform = 'translateX(-50%) scale(1.2)';
        sunflower.style.transition = 'transform 0.5s ease';
        
        mensaje.innerHTML = 'Tomaste una buena decisión ❤️<br>' +
                            'Va a ser el mejor día de tu vida!!🔥🙈';
        siBtn.style.display = 'none';
        noBtn.style.display = 'none';


        // Crear y mostrar la imagen
        const img = document.createElement('img');
        img.src = 'images.jpeg'; // Reemplaza con la ruta de tu imagen
        img.alt = 'Imagen de celebración';
        imagenRespuesta.appendChild(img);
        
        // Agregar clase para la animación después de un pequeño delay
        setTimeout(() => {
            imagenRespuesta.classList.add('mostrar');
        }, 100);
    });

    // Aseguramos que el contenedor de botones tenga posición relativa
    buttonsContainer.style.position = 'relative';

    // Definimos los límites del área segura (20% del borde de la pantalla)
    const safeArea = {
        top: window.innerHeight * 0.2,
        bottom: window.innerHeight * 0.8,
        left: window.innerWidth * 0.2,
        right: window.innerWidth * 0.8
    };

    noBtn.addEventListener('mouseover', () => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // Calculamos el área opuesta a donde está el mouse
        let newX, newY;
        
        if (mouseX < window.innerWidth / 2) {
            // Si el mouse está en la izquierda, movemos el botón a la derecha
            newX = Math.random() * (safeArea.right - safeArea.left) + safeArea.left;
        } else {
            // Si el mouse está en la derecha, movemos el botón a la izquierda
            newX = Math.random() * (window.innerWidth * 0.4);
        }
        
        if (mouseY < window.innerHeight / 2) {
            // Si el mouse está arriba, movemos el botón abajo
            newY = Math.random() * (safeArea.bottom - safeArea.top) + safeArea.top;
        } else {
            // Si el mouse está abajo, movemos el botón arriba
            newY = Math.random() * (window.innerHeight * 0.4);
        }

        // Aseguramos que el botón no se salga de la pantalla
        newX = Math.min(Math.max(20, newX), window.innerWidth - noBtn.offsetWidth - 20);
        newY = Math.min(Math.max(20, newY), window.innerHeight - noBtn.offsetHeight - 20);

        // Aplicamos el movimiento con una transición más rápida
        noBtn.style.position = 'fixed';
        noBtn.style.left = `${newX}px`;
        noBtn.style.top = `${newY}px`;
        noBtn.style.transition = 'all 0.03s ease'; // Hacemos la transición aún más rápida
    });

    // Aseguramos que el botón vuelva al área visible si se sale
    function checkButtonVisibility() {
        const rect = noBtn.getBoundingClientRect();
        if (rect.right < 0 || rect.left > window.innerWidth || 
            rect.bottom < 0 || rect.top > window.innerHeight) {
            // Si el botón está fuera de la pantalla, lo devolvemos al centro
            noBtn.style.left = '50%';
            noBtn.style.top = '50%';
            noBtn.style.transform = 'translate(-50%, -50%)';
        }
    }

    // Verificamos la visibilidad cada segundo
    setInterval(checkButtonVisibility, 1000);
}); 