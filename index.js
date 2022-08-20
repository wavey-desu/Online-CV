$(".es").hide()
$(".en").show()

$(".esToggle").click(() => {
    $(".en").hide()
    $(".es").show()
    $(".courses li h2").css("font-size","1.25vw")
    $(".contactList").css("gap","2.1vw")
})
$(".enToggle").click(() => {
    $(".en").show()
    $(".es").hide()
    $(".courses li h2").css("font-size","1.5vw")
    $(".contactList").css("gap","2vw")
})