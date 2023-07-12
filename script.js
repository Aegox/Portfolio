document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".navBar");
    const iconNav = document.querySelector(".fa-solid.fa-bars");
    const homeNav = document.querySelector(".section1");
    const aboutNav = document.querySelector(".section2");
    const skillsNav = document.querySelector(".section3");
    const proyectsNav = document.querySelector(".section4");
    const contactNav = document.querySelector(".section5");

    const handleViewNav = () => {
        nav.classList.toggle("show");
    };

    if (iconNav) {
        iconNav.addEventListener("click", handleViewNav);
        homeNav.addEventListener("click", handleViewNav);
        aboutNav.addEventListener("click", handleViewNav);
        skillsNav.addEventListener("click", handleViewNav);
        proyectsNav.addEventListener("click", handleViewNav);
        contactNav.addEventListener("click", handleViewNav);
    }

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        const target = document.querySelector(link.getAttribute('href'));
        link.addEventListener('click', (e) => {
            e.preventDefault();
            console.log(e)
            let offset = target.offsetTop - 150;
            if(e.target.className === 'section3') offset = target.offsetTop - 300;
            if(e.target.className === 'section5') offset = target.offsetTop - 0;
            window.scrollTo({
                top: offset,
                behavior: 'smooth'
            });
        });
    });
    const dataForm = document.querySelector('.formulary')
        .addEventListener('submit', e => {
        e.preventDefault();
        const data = Object.fromEntries(
            new FormData(e.target)
        )
        let templateParams = {
            name: data.name,
            message: data.message,
            email: data.email,
            your_name: 'Diego',

        };
 
        emailjs.send('service_rb06zqh', 'template_f1mco3r', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                swal("", "Your messgae was sent", "success");
                document.querySelector('.formulary').reset()
            }, function(error) {
                console.log('FAILED...', error);
            });
        })
});



