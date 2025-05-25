const endDate = new Date();
endDate.setDate(endDate.getDate() + 2);
endDate.setHours(endDate.getHours() + 12);
endDate.setMinutes(endDate.getMinutes() + 45);
endDate.setSeconds(endDate.getSeconds() + 5);

function updateCountdown() {
    const now = new Date();
    const diff = endDate - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("days").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();