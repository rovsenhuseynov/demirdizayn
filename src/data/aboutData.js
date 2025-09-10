import ImageAboutUs_1 from "../assets/images/beginning.webp";
import aboutIconX_Chair from "../assets/images/content_images/X-Chair.webp";
import aboutIconClock_Desk from "../assets/images/content_images/Clock-Desk.webp";
import aboutIconExperience from "../assets/images/content_images/experience.webp";

// импорт изображений для блока "About gallery"
import aboutGalleryImg1 from "../assets/images/aboutUsGallery/Adjustable-height-bar-stool.webp";
import aboutGalleryImg2 from "../assets/images/aboutUsGallery/Loft-shelf.webp";
import aboutGalleryImg3 from "../assets/images/aboutUsGallery/Loft-style-bar-set.webp";
import aboutGalleryImg4 from "../assets/images/aboutUsGallery/Loft-style-metal-chair.webp";
import aboutGalleryImg5 from "../assets/images/aboutUsGallery/Loft-style-metal-chair_1.webp";
import aboutGalleryImg6 from "../assets/images/aboutUsGallery/Loft-style-wall-shelf.webp";
import aboutGalleryImg7 from "../assets/images/aboutUsGallery/Loft-table-and-benches.webp";
import aboutGalleryImg8 from "../assets/images/aboutUsGallery/mangal_4.webp";

const aboutData = {
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
