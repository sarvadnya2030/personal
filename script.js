document.getElementById("clickMeButton").addEventListener("click", function() {
    let initialScreen = document.getElementById("initialScreen");
    let mainContent = document.getElementById("mainContent");
    let audio = document.getElementById("backgroundAudio");

    // Hide Initial Screen
    initialScreen.style.display = "none";

    // Show Main Content with Fade-in Effect
    mainContent.style.visibility = "visible";
    mainContent.style.opacity = "1";
    mainContent.style.display = "flex";

    // Play Audio
    if (audio) {
        audio.play()
            .then(() => console.log("Audio playing"))
            .catch(error => console.log("Audio play blocked:", error));
    }
});