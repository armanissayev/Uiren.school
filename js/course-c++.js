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

$(document).on("click", ".Ifelse-link", function(e) {
    $(".subtopic-name").text("/ If/else");
    turnoff();
    $(".Ifelse-link").css("text-decoration", "underline");

    $(".Ifelse").show();
    $(".IDE").hide();
    $(".Code").hide();
    $(".Variables").hide();
    $(".Loops").hide();
    $(".Static").hide();
    $(".Dynamic").hide();
    $(".STL").hide();
    $(".Functions").hide();
});

$(document).on("click", ".Loops-link", function(e) {
    $(".subtopic-name").text("/ Loops");
    turnoff();
    $(".Loops-link").css("text-decoration", "underline");

    $(".Loops").show();
    $(".IDE").hide();
    $(".Code").hide();
    $(".Ifelse").hide();
    $(".Variables").hide();
    $(".Static").hide();
    $(".Dynamic").hide();
    $(".STL").hide();
    $(".Functions").hide();
});

$(document).on("click", ".Static-link", function(e) {
    $(".subtopic-name").text("/ Static arrays");
    turnoff();
    $(".Static-link").css("text-decoration", "underline");

    $(".Static").show();
    $(".IDE").hide();
    $(".Code").hide();
    $(".Ifelse").hide();
    $(".Variables").hide();
    $(".Loops").hide();
    $(".Dynamic").hide();
    $(".STL").hide();
    $(".Functions").hide();
});

$(document).on("click", ".Dynamic-link", function(e) {
    $(".subtopic-name").text("/ Dynamic arrays");
    turnoff();
    $(".Dynamic-link").css("text-decoration", "underline");

    $(".Dynamic").show();
    $(".IDE").hide();
    $(".Code").hide();
    $(".Ifelse").hide();
    $(".Variables").hide();
    $(".Loops").hide();
    $(".Static").hide();
    $(".STL").hide();
    $(".Functions").hide();
});

$(document).on("click", ".STL-link", function(e) {
    $(".subtopic-name").text("/ STL");
    turnoff();
    $(".STL-link").css("text-decoration", "underline");

    $(".STL").show();
    $(".IDE").hide();
    $(".Code").hide();
    $(".Ifelse").hide();
    $(".Variables").hide();
    $(".Loops").hide();
    $(".Static").hide();
    $(".Dynamic").hide();
    $(".Functions").hide();
});

$(document).on("click", ".Functions-link", function(e) {
    $(".subtopic-name").text("/ Functions and Recursions");
    turnoff();
    $(".Functions-link").css("text-decoration", "underline");

    $(".Functions").show();
    $(".IDE").hide();
    $(".Code").hide();
    $(".Ifelse").hide();
    $(".Variables").hide();
    $(".Loops").hide();
    $(".Static").hide();
    $(".Dynamic").hide();
    $(".STL").hide();
});