$(document).ready(function () {
    const firstNum = $("#first");
    const secondNum = $("#second");
    $("button").click((values) => {
        values.preventDefault()
        for (let i = (firstNum.val()); i <= (secondNum.val()); i++) {
            $("select").append(`<option> ${i} <option>`)
        }
    })

})