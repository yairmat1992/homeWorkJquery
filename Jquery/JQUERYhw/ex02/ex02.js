$(document).ready(function () {
    const button = $("button")
    button.click((val) => {
        const data = $(val.target).parent("td").parent("tr")
        const someVal = data.find("input")
        someVal.hide()
        const pasteLocation = data.find("span")
        pasteLocation.html(someVal.val())
    });
})
