document.addEventListener("DOMContentLoaded", function() {
    var person = document.querySelector(".person");
    const pauseBtn = document.querySelector("button");
    pauseBtn.addEventListener("click", function (ev) {
        ev.preventDefault();
        person.classList.toggle("paused");
        if (this.innerText === "Pause") {
            this.innerText = "Run";
        } else {
            this.innerText = "Pause";
        }
    });
})