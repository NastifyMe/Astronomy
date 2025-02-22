const today = new Date().getDate();
console.log("Сегодняшний день:", today);  
                
// Выводим дату на страницу
document.getElementById("currentDate").innerText = `Сегодня: ${today} число`;

// Список изображений по дням
const images = {
  12: ["images_moon/phase of moon/phase_12.png"],
  13: ["images_moon/phase of moon/phase_13.png"],
  14: ["images_moon/phase of moon/phase_14.png"]
};

const defaultImages = ["images_moon/phase of moon/phase_12.png"]; // Если нет картинок на день
var currentImages = images[today] || defaultImages; // Определяем, какие картинки использовать
var currentIndex = 0; // Индекс текущей картинки

// Устанавливаем начальное изображение
document.getElementById("dailyImage").src = currentImages[currentIndex];

function changeImage(direction) {
    currentIndex += direction;
    console.log("Текущий индекс:", currentIndex);  // Проверка индекса
  
    if (currentIndex < 0) {
      currentIndex = currentImages.length - 1;
    } else if (currentIndex >= currentImages.length) {
      currentIndex = 0;
    }
  
    document.getElementById("dailyImage").src = currentImages[currentIndex];
  }