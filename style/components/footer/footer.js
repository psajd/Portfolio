(function() {
    // Функция для измерения времени загрузки страницы
    function measurePageLoadTime() {
        return window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    }

    // Функция для вывода информации о времени загрузки в подвал
    function displayPageLoadInfo() {
        const loadTimeElement = document.getElementById('load-time');
        if (loadTimeElement) {
            const loadTime = measurePageLoadTime();
            console.log(loadTime)
            loadTimeElement.textContent = `Page load time is ${loadTime}`;
        }
    }

    // Подписываемся на событие загрузки страницы
    window.addEventListener('load', function() {
        displayPageLoadInfo();
    });
})();