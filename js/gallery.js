// Функция для генерации случайного числа в заданном диапазоне
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Обработчик события DOMContentLoaded
document.addEventListener('DOMContentLoaded', function () {
    // Получаем элемент swiper-wrapper
    const swiperWrapper = document.getElementById('swiper-wrapper');

    // Формируем URL для запроса к API с использованием случайного числа в диапазоне от 1 до 100
    const apiUrl = `https://api.slingacademy.com/v1/sample-data/photos?offset=${getRandomNumber(1, 100)}&limit=20`;

    // Выполняем запрос к API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Логируем данные из API
            console.log(data.photos);

            // Получаем массив фотографий из данных API
            const images = data.photos;

            // Проходим по каждой фотографии и создаем слайд
            for (const photo of images) {
                const swiperSlide = document.createElement('div');

                // Задаем класс для слайда
                swiperSlide.className = 'swiper-slide';

                // Создаем элемент изображения
                const img = document.createElement('img');

                // Задаем атрибуты src и alt для изображения
                img.src = photo.url;
                img.alt = photo.title;

                // Логируем изображение
                console.log(img);

                // Добавляем изображение в слайд
                swiperSlide.appendChild(img);

                // Добавляем слайд в контейнер swiper-wrapper
                swiperWrapper.appendChild(swiperSlide);
            }

            // Инициализируем Swiper после добавления слайдов
            const swiper = new Swiper('.swiper', {
                // Опциональные параметры Swiper
                direction: 'horizontal', // направление (горизонтальное)
                loop: true, // зацикливание слайдера

                // Навигационные стрелки
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // Полоса прокрутки
                scrollbar: {
                    el: '.swiper-scrollbar',
                },
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
