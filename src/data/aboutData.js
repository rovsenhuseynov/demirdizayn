import ImageAboutUs_1 from "../assets/images/beginning.webp";
import aboutIconX_Chair from "../assets/images/content_images/X-Chair.webp";
import aboutIconClock_Desk from "../assets/images/content_images/Clock-Desk.webp";
import aboutIconExperience from "../assets/images/content_images/experience.webp";

// изображения галереи
import galleryImg1 from "../assets/images/content_images/Clock-Desk.webp";
import galleryImg1_big from "../assets/images/content_images/Clock-Desk-big.webp";
import galleryImg2 from "../assets/images/content_images/Loft_Sofa-Chair.webp";
import galleryImg2_big from "../assets/images/content_images/Loft_Sofa-Chair_big.webp";
import galleryImg3 from "../assets/images/content_images/Loft_Table-Chairs.webp";
import galleryImg3_big from "../assets/images/content_images/Loft_Table-Chairs_big.webp";
import galleryImg4 from "../assets/images/content_images/Mangal.webp";
import galleryImg4_big from "../assets/images/content_images/Mangal_big.webp";

// новые изображения слайдера сверху ------------------
import slider1 from "../assets/images/backgrounds/stool-wooden-background.webp";
import slider1_Portrait from "../assets/images/backgrounds/stool-wooden-background-portrait.webp";
import slider2 from "../assets/images/backgrounds/Cta-Loft-chair-and-table.webp";
import slider2_Portrait from "../assets/images/backgrounds/Loft-chair-and-table-portrait.webp";
import slider3 from "../assets/images/backgrounds/with-clocks_big.webp";
import slider3_Portrait from "../assets/images/backgrounds/with-clocks_big-portrait.webp"; 
import slider4 from "../assets/images/backgrounds/Console_table.webp";
import slider4_Portrait from "../assets/images/backgrounds/Console_table-portrait.webp";


// импорт новых изображений для блока "About gallery"
import aboutGalleryImg1 from "../assets/images/aboutUsGallery/Adjustable-height-bar-stool.webp";
import aboutGalleryImg2 from "../assets/images/aboutUsGallery/Loft-shelf.jpg";
import aboutGalleryImg3 from "../assets/images/aboutUsGallery/Loft-style-bar-set.jpg";
import aboutGalleryImg4 from "../assets/images/aboutUsGallery/Loft-style-metal-chair.jpg";
import aboutGalleryImg5 from "../assets/images/aboutUsGallery/Loft-style-metal-chair_1.jpg";
import aboutGalleryImg6 from "../assets/images/aboutUsGallery/Loft-style-wall-shelf.jpg";
import aboutGalleryImg7 from "../assets/images/aboutUsGallery/Loft-table-and-benches.jpg";
import aboutGalleryImg8 from "../assets/images/aboutUsGallery/mangal_4.jpg";



const aboutData = {
  // ------------------ новые слайдерные изображения ------------------
  sliderImages: [
    { image: slider1, imagePortrait: slider1_Portrait },
    { image: slider2, imagePortrait: slider2_Portrait },
    { image: slider3, imagePortrait: slider3_Portrait },
    { image: slider4, imagePortrait: slider4_Portrait },
  ],

  hero: {
    title: "Haqqımızda",
    overlayText: "Gücümüz — hər detalı incəliklə gözdən keçirməkdir.",
  },

  ourWork: {
    title: "Bizim Fəaliyyətimiz",
    text: [
      "Biz kiçik bir emalatxana kimi fəaliyyətə başladıq, hər bir sifarişə fərdi yanaşma və detallara diqqət bizim əsas prinsiplərimiz oldu.",
      "Bu gün biz Industrial dizaynın gözəlliyi və metal möhkəmliyi ahəngi ilə loft mebel elementlərini hazırlayırıq — qaynaq və yaradıcı baxışla sifarişlərinizi gerçəkləşdiririk. ",
      "Həmçinin müxtəlif çətinlik dərəcəsində qaynaq işləri də təklif edirik.",
    ],
    image: ImageAboutUs_1,
  },

  cards: [
    {
      title: "Yaradıcılıq",
      description: "Hər detalda fərqlilik və estetik baxış.",
      icon: aboutIconX_Chair,
    },
    {
      title: "Etibarlılıq",
      description: "Layihələrdə dəqiqlik və vaxtında icra.",
      icon: aboutIconClock_Desk,
    },
    {
      title: "Təcrübə",
      description: "Uzun illərin biliyi və təcrübəsi.",
      icon: aboutIconExperience,
    },
  ],

  galleryItems: [
    {
      src: galleryImg1,
      big: galleryImg1_big,
      text: "Saat üslublu loft masa",
    },
    {
      src: galleryImg2,
      big: galleryImg2_big,
      text: "Loft üslublu divan və kreslo",
    },

    {
      src: galleryImg3,
      big: galleryImg3_big,
      text: "Loft üslubunda masa və stullar",
    },
    {
      src: galleryImg4,
      big: galleryImg4_big,
      text: "Estetik dizaynlı metal və taxtadan mangal",
    },
  ],

  // изображения для блока "About gallery"
  aboutGallery: {
    // ВАЖНО: оставляем по 8 элементов,
    // чтобы не менять раскладку / поведение сетки и стилей.
    images1: [
      aboutGalleryImg1,
      aboutGalleryImg2,
      aboutGalleryImg3,
      aboutGalleryImg4,
      aboutGalleryImg1,
      aboutGalleryImg2,
      aboutGalleryImg3,
      aboutGalleryImg4,
    ],
    images2: [
      aboutGalleryImg5,
      aboutGalleryImg6,
      aboutGalleryImg7,
      aboutGalleryImg8,
      aboutGalleryImg5,
      aboutGalleryImg6,
      aboutGalleryImg7,
      aboutGalleryImg8,
    ],
  },
};

export default aboutData;
