// Custom JS for Learndash Compatibility
// Created by Dexter
// Aeron7 Inc


// lesson Page Image Issue

if (/(lessons|topic|quizzes)/.test(window.location.href)) {
content_html=document.getElementsByClassName("ld-focus-content")[0].innerHTML;
new_content_html = '<section class="post-content">' + content_html + '</section>';
document.getElementsByClassName("ld-focus-content")[0].innerHTML = new_content_html;
} else {
var expandCSS = document.createElement('style')
expandCSS.innerHTML = ".learndash-wrapper .ld-expand-button.ld-button-alternate .ld-text {background-color: white !important;}";
document.body.appendChild(expandCSS);
}
