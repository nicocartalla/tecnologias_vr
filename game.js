// Estado del juego
const gameState = {
    markersFound: {
        hiro: false,
        kanji: false,
        pattern: false
    },
    totalMarkers: 3,
    foundCount: 0,
    gameCompleted: false,
    firstTimeFound: {
        hiro: true,
        kanji: true,
        pattern: true
    }
};

// Pistas para cada marcador
const hints = {
    hiro: "¡Excelente! Primera pista descubierta. Ahora busca el marcador del Guardián...",
    kanji: "¡Vas por buen camino! Segunda pista encontrada. Busca el último marcador con la letra A...",
    pattern: "¡Increíble! Has encontrado todas las pistas. ¡El tesoro está a tu alcance!",
    initial: "Busca el primer marcador para comenzar tu aventura...",
    complete: "¡Felicitaciones! Has completado la búsqueda del tesoro."
};

// Inicializar el juego cuando se carga la página
window.addEventListener('load', function() {
    console.log('Juego de Búsqueda del Tesoro AR iniciado');
    
    // Toggle del panel principal
    const togglePanelButton = document.getElementById('toggle-panel');
    const infoPanel = document.getElementById('info-panel');
    
    togglePanelButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log('Toggle button clicked!');
        
        if (infoPanel.classList.contains('collapsed')) {
            infoPanel.classList.remove('collapsed');
            togglePanelButton.textContent = '▲';
            console.log('Panel expanded');
        } else {
            infoPanel.classList.add('collapsed');
            togglePanelButton.textContent = '▼';
            console.log('Panel collapsed');
        }
    });
    
    // También funciona con touch en móviles
    togglePanelButton.addEventListener('touchstart', function(e) {
        e.preventDefault();
        togglePanelButton.click();
    });
    
    // Toggle de instrucciones
    const toggleButton = document.getElementById('toggle-instructions');
    const instructionsContent = document.getElementById('instructions-content');
    
    toggleButton.addEventListener('click', function() {
        if (instructionsContent.style.display === 'none') {
            instructionsContent.style.display = 'block';
            toggleButton.textContent = '❌ Cerrar';
        } else {
            instructionsContent.style.display = 'none';
            toggleButton.textContent = 'ℹ️ Info';
        }
    });
    
    // Botón de cerrar modal de victoria
    const closeVictoryButton = document.getElementById('close-victory');
    closeVictoryButton.addEventListener('click', function() {
        const victoryModal = document.getElementById('victory-modal');
        victoryModal.style.display = 'none';
    });
    
    // Botón de reinicio
    const restartButton = document.getElementById('restart-button');
    restartButton.addEventListener('click', restartGame);
    
    // Configurar listeners para cada marcador
    setupMarkerListeners();
    
    // Actualizar UI inicial
    updateUI();
    
    // Iniciar con panel minimizado en móviles
    if (window.innerWidth < 600) {
        infoPanel.classList.add('collapsed');
        togglePanelButton.textContent = '▼';
    } else {
        infoPanel.classList.remove('collapsed');
        togglePanelButton.textContent = '▲';
    }
});

// Configurar listeners para los marcadores
function setupMarkerListeners() {
    const markers = ['hiro', 'kanji', 'pattern'];
    
    markers.forEach(markerName => {
        const marker = document.getElementById(`marker-${markerName}`);
        
        if (marker) {
            // Evento cuando se detecta el marcador
            marker.addEventListener('markerFound', function() {
                handleMarkerFound(markerName);
            });
            
            // Evento cuando se pierde el marcador
            marker.addEventListener('markerLost', function() {
                handleMarkerLost(markerName);
            });
        }
    });
}

// Manejar cuando se encuentra un marcador
function handleMarkerFound(markerName) {
    console.log(`Marcador encontrado: ${markerName}`);
    
    // Si es la primera vez que se encuentra este marcador
    if (!gameState.markersFound[markerName] && gameState.firstTimeFound[markerName]) {
        gameState.markersFound[markerName] = true;
        gameState.firstTimeFound[markerName] = false;
        gameState.foundCount++;
        
        // Reproducir sonido
        playSound('sound-found');
        
        // Actualizar UI
        updateUI();
        updateMarkerStatus(markerName, true);
        updateHint(markerName);
        
        // Mostrar mensaje temporal
        showTemporaryMessage(`¡Marcador ${gameState.foundCount} encontrado!`);
        
        // Verificar si se completó el juego
        if (gameState.foundCount === gameState.totalMarkers && !gameState.gameCompleted) {
            setTimeout(() => {
                completeGame();
            }, 2000);
        }
    }
}

// Manejar cuando se pierde un marcador
function handleMarkerLost(markerName) {
    console.log(`Marcador perdido: ${markerName}`);
    // Aquí podrías agregar efectos visuales si lo deseas
}

// Actualizar la interfaz de usuario
function updateUI() {
    // Actualizar barra de progreso
    const progressFill = document.getElementById('progress-fill');
    const progressText = document.getElementById('progress-text');
    
    const percentage = (gameState.foundCount / gameState.totalMarkers) * 100;
    progressFill.style.width = `${percentage}%`;
    progressText.textContent = `${gameState.foundCount} / ${gameState.totalMarkers} marcadores encontrados`;
}

// Actualizar el estado visual de un marcador
function updateMarkerStatus(markerName, found) {
    const statusElement = document.getElementById(`marker-${markerName}-status`);
    
    if (statusElement && found) {
        statusElement.classList.add('found');
        const statusIcon = statusElement.querySelector('.marker-status');
        if (statusIcon) {
            statusIcon.textContent = '✅';
        }
    }
}

// Actualizar la pista actual
function updateHint(markerName) {
    const hintElement = document.getElementById('current-hint');
    
    if (hintElement && hints[markerName]) {
        hintElement.textContent = hints[markerName];
        hintElement.style.animation = 'none';
        setTimeout(() => {
            hintElement.style.animation = 'pulse 1s ease';
        }, 10);
    }
}

// Mostrar mensaje temporal
function showTemporaryMessage(message) {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(76, 175, 80, 0.95);
        color: white;
        padding: 20px 40px;
        border-radius: 15px;
        font-size: 1.5em;
        font-weight: bold;
        z-index: 10001;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        animation: scaleIn 0.3s ease;
    `;
    messageDiv.textContent = message;
    document.body.appendChild(messageDiv);
    
    setTimeout(() => {
        messageDiv.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageDiv);
        }, 300);
    }, 2000);
}

// Completar el juego
function completeGame() {
    if (gameState.gameCompleted) return;
    
    gameState.gameCompleted = true;
    console.log('¡Juego completado!');
    
    // Reproducir sonido de victoria
    playSound('sound-victory');
    
    // Actualizar pista final
    updateHint('complete');
    
    // Mostrar modal de victoria
    const victoryModal = document.getElementById('victory-modal');
    victoryModal.style.display = 'flex';
    
    // Agregar confetti o efectos adicionales si lo deseas
    createConfetti();
}

// Reproducir sonido
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    if (sound) {
        sound.play().catch(err => {
            console.log('Error al reproducir sonido:', err);
        });
    }
}

// Reiniciar el juego
function restartGame() {
    // Reset del estado del juego
    gameState.markersFound = {
        hiro: false,
        kanji: false,
        pattern: false
    };
    gameState.foundCount = 0;
    gameState.gameCompleted = false;
    gameState.firstTimeFound = {
        hiro: true,
        kanji: true,
        pattern: true
    };
    
    // Reset de la UI
    updateUI();
    
    // Reset de los estados de los marcadores
    const markerItems = document.querySelectorAll('.marker-item');
    markerItems.forEach(item => {
        item.classList.remove('found');
        const statusIcon = item.querySelector('.marker-status');
        if (statusIcon) {
            statusIcon.textContent = '❓';
        }
    });
    
    // Reset de la pista
    const hintElement = document.getElementById('current-hint');
    hintElement.textContent = hints.initial;
    
    // Ocultar modal de victoria
    const victoryModal = document.getElementById('victory-modal');
    victoryModal.style.display = 'none';
    
    console.log('Juego reiniciado');
}

// Crear efecto de confetti
function createConfetti() {
    const colors = ['#FFD700', '#FF69B4', '#00FFFF', '#FF4500', '#32CD32'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: 10px;
                height: 10px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -10px;
                opacity: 1;
                z-index: 10002;
                border-radius: 50%;
            `;
            document.body.appendChild(confetti);
            
            const duration = 2000 + Math.random() * 2000;
            const startTime = Date.now();
            
            function animateConfetti() {
                const elapsed = Date.now() - startTime;
                const progress = elapsed / duration;
                
                if (progress < 1) {
                    confetti.style.top = `${progress * 120}%`;
                    confetti.style.opacity = 1 - progress;
                    confetti.style.transform = `rotate(${progress * 360 * 3}deg)`;
                    requestAnimationFrame(animateConfetti);
                } else {
                    document.body.removeChild(confetti);
                }
            }
            
            animateConfetti();
        }, i * 50);
    }
}

// Agregar estilos CSS para las animaciones
const style = document.createElement('style');
style.textContent = `
    @keyframes scaleIn {
        from { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        to { transform: translate(-50%, -50%) scale(1); opacity: 1; }
    }
    @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
    }
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.02); }
    }
`;
document.head.appendChild(style);

