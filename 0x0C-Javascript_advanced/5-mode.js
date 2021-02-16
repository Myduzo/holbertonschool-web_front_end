function changeMode(size, weight, transform, background, color) {
    const mode = document.querySelector("body");

    return function() {
        mode.style.fontSize = size;
        mode.style.fontWeight = weight;
        mode.style.textTransform = transform;
        mode.style.backgroundColor = background;
        mode.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    const p = document.createElement("p");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    const btn3 = document.createElement("button");

    p.innerHTML = "Welcome Holberton!";
    btn1.innerHTML = "Spooky";
    btn1.innerHTML = "Dark mode";
    btn1.innerHTML = "Scream mode";

    btn1.onclick = spooky;
    btn2.onclick = darkMode;
    btn3.onclick = screamMode;

    document.body.appendChild(p);
    document.body.appendChild(btn1);
    document.body.appendChild(btn2);
    document.body.appendChild(btn3);
}
main();
