const step = document.getElementsByClassName("step");
const groupStep = document.getElementsByClassName("group-btn");
const text = document.getElementsByClassName("text");
const finish = document.getElementById("finish");
let StepsProgress1 = [100, 150]
let StepsProgress2 = [150, 480]
let Stepsfinish = [480, 530]
var animation = bodymovin.loadAnimation({
    container: document.getElementById('element'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json',
})

finish.addEventListener("click", function () {
    animation.playSegments([0, 100], true);
    this.style.display = "none";
    step[0].classList.add("active");
    text[0].classList.add("show");
    groupStep[0].style.display = "block";
})

for (let i = 0; i < step.length; i++) {
    step[i].addEventListener("click", progress, false)
}

function progress(evt) {
    for (let i = 0; i < step.length; i++) {
        step[i].classList.remove("active")
        text[i].classList.remove("show")
        data = i;
    }
    evt.target.classList.add("active");
    text[evt.target.outerText].classList.add("show")
    switch (evt.target.outerText) {
        case "0":
            animation.playSegments([100, 150], true);
            break;
        case "1":
            animation.playSegments([150, 480], true);
            break;
        case "2":
            animation.playSegments([480, 530], true);
            break;

    }
}
