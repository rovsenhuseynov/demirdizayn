// Импорты иконок для ServicesPreview
import icon1 from "../assets/icons/icons_services/Metal & Design.svg";
import icon2 from "../assets/icons/icons_services/Metal-Works.svg";
import icon3 from "../assets/icons/icons_services/Welding Works.svg";

// Импорты изображений для Services.jsx
import designImg from "../assets/images/backgrounds/Background welding work.webp";
import drawingImg from "../assets/images/backgrounds/Background welding work.webp";
import deliveryImg from "../assets/images/backgrounds/Background welding work.webp";
import montageImg1 from "../assets/images/backgrounds/Background welding work.webp";
import montageImg2 from "../assets/images/backgrounds/Background welding work.webp";
import montageImg3 from "../assets/images/backgrounds/Background welding work.webp";

// Первый массив с иконками — для ServicesPreview
const servicesList = [
  {
    title: "Fərdi lofft mebel sifarişi",
    description:
      "Məkanınıza uyğun dizaynda masa, stul, şkaf, rəf və digər mebel növlərinin sifarişi və hazırlanması.",
    icon: icon2,
  },

  {
    title: "Dizayn və quraşdırma",
    description:
      "Ofis, kafe, restoran və evlər üçün tam lofft stilində interyerin dizaynı və mebelin montajı.",
    icon: icon1,
  },

  {
    title: "Qaynaq işləri",
    description:
      "Peşəkar qaynaqçı komandamız ilə istənilən növdə metal birləşdirmə və karkas yığımı xidmətləri.",
    icon: icon3,
  },
];

// Второй массив с изображениями — для Services.jsx
const servicesPageData = [
  {
    title: "Дизайн",
    image: designImg,
    text: "Разработка концепции и стилевых решений под интерьер или задачу.",
  },
  {
    title: "Чертежи",
    image: drawingImg,
    text: "Подготовка технической документации и 3D-визуализаций.",
  },
  {
    title: "Доставка",
    image: deliveryImg,
    text: "Бережная доставка изделий.",
  },
  {
    title: "Монтаж",
    image: montageImg1,
    text: "Сборка и установка изделий на объекте.",
  },
  {
    title: "Монтаж",
    image: montageImg2,
    text: "Сборка и установка изделий на объекте.",
  },
  {
    title: "Монтаж",
    image: montageImg3,
    text: "Сборка и установка изделий на объекте.",
  },
];

// Экспортируем оба массива
export { servicesList, servicesPageData };

// Для совместимости с предыдущим кодом ServicesPreview
export default servicesList;
