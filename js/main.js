var btn = document.getElementById("gohomebtn");

function buttonClicked() {
    console.log("Button Clicked!");
    btn.removeEventListener("click", buttonClicked);
    document.getElementById("gohomebtn").innerHTML = "You're DOOMED!";
}



btn.addEventListener("click", buttonClicked);
