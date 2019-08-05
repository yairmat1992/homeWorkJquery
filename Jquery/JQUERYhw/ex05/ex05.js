$(document).ready(function () {
    const numbers = $(".numdiv")
    numbers.click((event) => {
        const result = $.inArray(event.target, numbers) + 1
        alert(result)
    })
})
