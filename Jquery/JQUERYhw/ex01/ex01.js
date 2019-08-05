$(document).ready(function () {
    const blueDiv = $(".blue")
    const redDiv = $(".red")
    const button = $("#fade-btn")
    redDiv.html("red"); redDiv.css("background-color", "red")
    blueDiv.html("blue"); blueDiv.css("background-color", "blue")
    button.click(() => {
        blueDiv.fadeToggle(2000)
    })
})


