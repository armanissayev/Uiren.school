$(document).on("click", ".IDE-link", function(e) {
    $(".subtopic-name").text("/ IDE for C++");
    $(".IDE").show();
    $(".Code").hide();
    $(".Variables").hide();
    $(".Ifelse").hide();
    $(".Loops").hide();
    $(".Static").hide();
    $(".Dynamic").hide();
    $(".STL").hide();
    $(".Functions").hide();
});

$(document).on("click", ".Code-link", function(e) {
    $(".subtopic-name").text("/ First Code");
    $(".Code").show();
    $(".IDE").hide();
    $(".Variables").hide();
    $(".Ifelse").hide();
    $(".Loops").hide();
    $(".Static").hide();
    $(".Dynamic").hide();
    $(".STL").hide();
    $(".Functions").hide();
});