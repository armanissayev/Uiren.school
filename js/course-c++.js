function turnoff() {
    $(".IDE-link").css("text-decoration", "none");
    $(".Code-link").css("text-decoration", "none");
    $(".Variables-link").css("text-decoration", "none");
    $(".Ifelse-link").css("text-decoration", "none");
    $(".Loops-link").css("text-decoration", "none");
    $(".Static-link").css("text-decoration", "none");
    $(".Dynamic-link").css("text-decoration", "none");
    $(".STL-link").css("text-decoration", "none");
    $(".Functions-link").css("text-decoration", "none");

    $(".subtopic").hover(function() {
        $(this).css("text-decoration", e.type === "mouseenter" ? "underline" : "none")
    });
}

$(document).on("click", ".IDE-link", function(e) {
    $(".subtopic-name").text("/ IDE for C++");
    turnoff();
    $(".IDE-link").css("text-decoration", "underline");
    
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
    turnoff();
    $(".Code-link").css("text-decoration", "underline");

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

$(document).on("click", ".Variables-link", function(e) {
    $(".subtopic-name").text("/ Variables");
    turnoff();
    $(".Variables-link").css("text-decoration", "underline");

    $(".Variables").show();
    $(".IDE").hide();
    $(".Code").hide();
    $(".Ifelse").hide();
    $(".Loops").hide();
    $(".Static").hide();
    $(".Dynamic").hide();
    $(".STL").hide();
    $(".Functions").hide();
});