document.addEventListener("DOMContentLoaded", function () {
    console.log("Сайт Медета Мухамеджанова загружен.");
});
const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;
let index = 0;

// Функция для переключения слайдов
function moveCarousel() {
    carousel.style.transition = 'transform 0.5s ease'; // Плавное движение
    carousel.style.transform = `translateX(-${index * (80 + 20)}px)`; // Смещаем слайдер
}

// Функции для переключения слайдов
function nextSlide() {
    index++;
    if (index >= totalImages) {
        index = 0; // Если достигнут конец, начинаем с первого изображения
    }
    moveCarousel();
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = totalImages - 1; // Если на первом изображении, переходим к последнему
    }
    moveCarousel();
}

// Обработчики нажатий на стрелки
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

