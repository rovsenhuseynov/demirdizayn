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

// ------------------ новые изображения слайдера сверху ------------------
import slider1 from "../assets/images/backgrounds/stool-wooden-background.webp";
import slider1_Portrait from "../assets/images/backgrounds/stool-wooden-background-portrait.webp";
import slider2 from "../assets/images/backgrounds/Loft-chair-and-table.webp";
import slider2_Portrait from "../assets/images/backgrounds/Loft-chair-and-table-portrait.webp";
import slider3 from "../assets/images/backgrounds/with-clocks_big.webp"; // портретной версии нет

const aboutData = {
  // ------------------ новые слайдерные изображения ------------------
  sliderImages: [
    { image: slider1, imagePortrait: slider1_Portrait },
    { image: slider2, imagePortrait: slider2_Portrait },
    { image: slider3 },
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
};

export default aboutData;
