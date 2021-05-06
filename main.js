$(".accordion-description").hide()

$(".accordion-title").click(e => {
    const titleId = e.currentTarget.id
    const id = titleId.split("-")[2]
    const descId = "#accordion-desc-" + id
    const signId = "#accordion-sign-" + id

    // Change the sign in the title
    if ($(descId).css("display") === "none") {
        $(signId).html('-');
    } else {
        $(signId).html('+');
    }

    $(descId).slideToggle()
})