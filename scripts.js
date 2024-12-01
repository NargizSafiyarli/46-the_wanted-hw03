document.addEventListener("DOMContentLoaded", function () {
    let timeElement = document.getElementById("time");

    function updateClock() {
        let now = new Date();
        let hours = String(now.getHours()).padStart(2, '0');
        let minutes = String(now.getMinutes()).padStart(2, '0');
        let seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateClock, 1000);
    updateClock();

    let canvas = document.getElementById("artCanvas");
    let ctx = canvas.getContext("2d");

    canvas.width = 500;
    canvas.height = 500;

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    /*function for creating code art*/
    function createCodeArt(length) {
        let x = canvas.width / 2, y = canvas.height / 2, angle = 0, step = 10;

        for (let i = 0; i < 60; i++)/*60 times loop*/ {
            ctx.beginPath();
            ctx.moveTo(x, y);
            x += Math.cos(angle) * length;
            y += Math.sin(angle) * length;
            ctx.lineTo(x, y);
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 2;
            ctx.stroke();

            angle += Math.PI / 2;
            length += step;

            if (length > canvas.width) break;
        }
    }

    createCodeArt(50);
});
