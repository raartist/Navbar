const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener('click', () => {
    navlinks.classList.toggle("open")
    links.forEach(link => {
        link.classLis.toggle('fade');
    })
})

// links.forEach(link => {
//     link.classList.toggle('fade');
// })