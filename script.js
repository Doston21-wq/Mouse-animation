document.addEventListener('mousemove', function(e) {
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;

    const red = Math.round((x / width) * 255);
    const green = Math.round((y / height) * 255);
    const blue = 150; // doimiy biroz ko'k rang

    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
