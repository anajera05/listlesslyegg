// main content fade in
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        fadeInElements.forEach((el) => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible'); // Add visible class when element is in viewport
            }
        });
    };
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});

// Navigation modal
var modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal
document.getElementById("myBtn").onclick = function() {
    modal.style.display = "flex";
}

// When the user clicks on <span> (x), close the modal
document.getElementsByClassName("close")[0].onclick = function() {
    modal.style.display = "none";

}

// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}