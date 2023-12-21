// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    const swiperWrapper = document.getElementById('swiper-wrapper');
    const apiUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${getRandomNumber(1, 100)}&limit=20`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const images = data.photos;
            let imagesLoaded = 0;

            function imageLoaded() {
                imagesLoaded++;

                // Проверяем, все ли изображения загружены
                if (imagesLoaded === images.length) {
                    // Инициализируем Swiper после загрузки всех изображений
                    initializeSwiper();
                }
            }

            for (const photo of images) {
                const swiperSlide = document.createElement('div');
                swiperSlide.className = 'swiper-slide';

                const img = document.createElement('img');
                img.src = photo.url;
                img.alt = photo.title;

                // Добавляем обработчик события load к каждому изображению
                img.addEventListener('load', imageLoaded);

                swiperSlide.appendChild(img);
                swiperWrapper.appendChild(swiperSlide);
            }
        })
        .catch(error => console.error('Error fetching data:', error));

    function initializeSwiper() {
        const swiper = new Swiper('.swiper', {
            direction: 'horizontal',
            loop: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        });
    }
});
