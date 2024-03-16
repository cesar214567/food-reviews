
const data = [
    {
        "name":"ktana",
        "md":"ktana.md",
        "background":"ktana.png"
    }
]

window.addEventListener('DOMContentLoaded', async event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
    
    data.map((review) => { 
        const navbar = document.getElementById('navbar');
        navbar.insertAdjacentHTML("beforeend",`<li class="nav-item"><a class="nav-link js-scroll-trigger" href="#${review['name']}">${review['name']}</a></li>`);
        const sections = document.getElementById('sections');
        sections.insertAdjacentHTML("beforeend",`
        <section class="resume-section" id="${review['name']}" style="background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url('./assets/img/${review['name']}/ktana.png');background-size: contain;background-repeat: no-repeat; ">
                <div class="resume-section-content" style="z-index:1;">
                    <h2 class="mb-5 text-primary">${review['name']}</h2>
                    <zero-md src="${'https://raw.githubusercontent.com/cesar214567/food-reviews/main/mds/' + review['md']}">
                        <template>
                        <!-- The CSS load order is respected -->
                        <link rel="stylesheet" href="../css/styles.css" />
                        </template>
                    </zero-md>
                </div>
            </section>
            <hr class="m-0" />
        `)
    })
});
