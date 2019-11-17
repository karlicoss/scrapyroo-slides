/* by default footer is in the slide_number section, so it ends up displayed depending on body length */
/* we want it to be at bottom */
// window.addEventListener('onDOMContentLoaded', function() {
window.addEventListener('load', function() {
    for (const footer of document.querySelectorAll('.reveal .slide-footer')) {
        console.log(footer);
        parent = footer.parentNode;
        parent.removeChild(footer);

        // meh
        parent.parentNode.appendChild(footer);
    }
});
