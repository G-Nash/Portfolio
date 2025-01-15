window.addEventListener('scroll', function () {
    const titleSection = document.getElementById('title');
    const navBar = document.getElementById('navBar');

    // Calculate the scroll position relative to the title section
    if (window.scrollY >= titleSection.getBoundingClientRect().height) {
        navBar.style.visibility = 'visible';
        navBar.style.opacity = '1';
    } else {
        navBar.style.visibility = 'hidden';
        navBar.style.opacity = '0';
    }
});