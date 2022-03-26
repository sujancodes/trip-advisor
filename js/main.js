// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function() {
    if (document.documentElement.scrollTop > 50){
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// Navbar Hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// Swiper Slider

var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 3500,
    },
});

// counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer);
            }
        }, step);
    }
    counter("count1", 0, 1823, 50);
    counter("count2", 0, 1975, 50);
    counter("count3", 0, 1668, 50);
    counter("count4", 0, 2100, 50);
})


// Our Partner