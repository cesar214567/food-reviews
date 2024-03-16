
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
        <section class="resume-section" id="${review['name']}" style="background-image: url('./assets/img/${review['name']}/ktana.png');background-size: contain;background-repeat: no-repeat;opacity: .5;">
                <div class="resume-section-content">
                    <h2 class="mb-5 text-primary">${review['name']}</h2>
                    <zero-md src="${'https://raw.githubusercontent.com/cesar214567/food-reviews/main/mds/' + review['md']}">
                        <template>
                        <!-- The CSS load order is respected -->
                        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                        </template>
                    </zero-md>
                </div>
            </section>
            <hr class="m-0" />
        `)
    })
});
