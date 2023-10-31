function startCountdown() {
    const countdownDisplay = document.getElementById('cronometro');
    const seconds = 600;
    let timer = seconds;
    const interval = setInterval(function() {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        countdownDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        timer--;

        if (timer < 0) {
            clearInterval(interval);
            countdownDisplay.textContent = 'Tempo expirado';
        }
    }, 1000);
}