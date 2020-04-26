// Custom JS for Learndash Compatibility
// Created by Dexter
// Aeron7 Inc


// lesson Page Image Issue
if (/lessons/.test(window.location.href)) {
content_html=document.getElementsByClassName("ld-focus-content")[0].innerHTML;
new_content_html = '<section class="post-content">' + content_html + '</section>';
document.getElementsByClassName("ld-focus-content")[0].innerHTML = new_content_html;
}
