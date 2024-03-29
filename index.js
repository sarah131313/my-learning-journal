document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById("hamburger-menu")
    const listBurger = document.querySelector(".list-burger")
    const viewMore = document.getElementById("view-more")
    const containerSection = document.querySelector(".section-two")
    
     


    hamburgerMenu.addEventListener("click", () => {
        if (listBurger.style.display === "block") {
            // If the menu is currently visible, hide it
            hamburgerMenu.style.transform = "none"
            listBurger.style.display = "none"
            document.querySelector("header").classList.remove('blurry-header')
        } else {
            // If the menu is currently hidden, show it
            listBurger.innerHTML = `
                
                <ul>
                    <li class="link-nav-burger"><a href="home.html">HOME</a></li>
                    <li class="link-nav-burger"><a href="about.html">ABOUT ME</a></li>
                    <li class="link-nav-burger"><a href="sources.html">Resources</a></li>
                </ul>
            `
            hamburgerMenu.style.transform = "scale(1.1)"
            listBurger.style.display = "block"
            document.querySelector("header").classList.add('blurry-header')
        }
    })




    // Event listener to close the list when clicking outside the menu
    document.addEventListener("click", (event) => {
        if (!event.target.closest("#hamburger-menu") && !event.target.closest(".list-burger")) {
            listBurger.style.display = "none"
            document.querySelector("header").classList.remove('blurry-header')
        }
    })



    let showMore = false

    viewMore.addEventListener("click", (event) => {
        event.preventDefault()

        const additionalCards = containerSection.querySelectorAll('.three, .four')

        if (!showMore) {
            additionalCards.forEach(card => card.style.display = 'grid')
            viewMore.textContent = "View Less";
        } else {
            additionalCards.forEach(card => card.style.display = 'none')
            viewMore.textContent = "View More"
        }

        showMore = !showMore
    })

    
})



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})


