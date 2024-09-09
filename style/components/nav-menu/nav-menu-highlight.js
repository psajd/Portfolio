const aboutSection = document.getElementById('about-block');
const projectsSection = document.getElementById('projects-block');
const experienceSection = document.getElementById('experience-block');
const contactSection = document.getElementById('footer');


const projectsOffset = projectsSection.offsetTop;
const experienceOffset = experienceSection.offsetTop;
const contactOffset = contactSection.offsetTop;

window.addEventListener('scroll', function() {

    // Получаем текущую позицию скролла
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    // Устанавливаем классы в зависимости от положения скролла
    if (scrollPosition + 100 < projectsOffset) {
        setActiveClass('about');
    } else if (scrollPosition + 100 < experienceOffset) {
        setActiveClass('projects');
    } else {
        setActiveClass('experience');
    }
});

function setActiveClass(activeItem) {
    const navItems = document.querySelectorAll('.nav-menu__item');

    // Удаляем класс active у всех пунктов меню
    navItems.forEach(function(item) {
        item.classList.remove('active');
    });

    // Добавляем класс active только выбранному пункту меню
    const activeNavItem = document.querySelector('#' + activeItem + '-item');
    activeNavItem.classList.add('active');
}