export function animateBackground() {

    

    const canvas = document.getElementById("bg");
    const ctx = canvas && canvas.getContext
        ? canvas.getContext("2d")
        : null;

    if (!canvas || !ctx) return;

    let stars = [];

    function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    for (let i = 0; i < 40; i++) {
        stars.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            r: Math.random() * 1 + 0.5,
            alpha: Math.random(),
            speed: Math.random() * 0.02,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3,
        });
    }

    function drawGrid() {
        const size = 60;

        ctx.strokeStyle = "rgba(70, 90, 255, 0.08)";
        ctx.lineWidth = 0.8;

        for (let x = 0; x < canvas.width; x += size) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        for (let y = 0; y < canvas.height; y += size) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }
    }

    function drawBackground() {
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);

        gradient.addColorStop(0, "#090916");
        gradient.addColorStop(1, "#000814");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawStars() {
        for (const star of stars) {

            star.x += star.vx;
            star.y += star.vy;

            if (star.x < 0 || star.x > canvas.width) {
                star.vx *= -1;
            }

            if (star.y < 0 || star.y > canvas.height) {
                star.vy *= -1;
            }

            star.alpha += star.speed;

            if (star.alpha >= 1 || star.alpha <= 0.2) {
                star.speed *= -1;
            }

            ctx.beginPath();
            ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);

            ctx.fillStyle = `rgba(120,180,255,${star.alpha})`;
            ctx.shadowBlur = 10;
            ctx.shadowColor = "#60a5fa";

            ctx.fill();
        }

        ctx.shadowBlur = 0;
    }

    function loop() {
        drawBackground();
        drawGrid();
        drawStars();

        requestAnimationFrame(loop);
    }

    loop();
}