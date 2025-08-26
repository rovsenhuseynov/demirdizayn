// import ImageAboutUs_1 from "../assets/images/beginning.webp";

// import aboutIconX_Chair from "../assets/images/content_images/X-Chair.webp";
// import aboutIconClock_Desk from "../assets/images/content_images/Clock-Desk.webp";
// import aboutIconExperience from "../assets/images/content_images/experience.webp";

// const aboutData = {
//   hero: {
//     title: "Haqqımızda",
//     overlayText: "Gücümüz — hər detalı incəliklə gözdən keçirməkdir.",
//   },

//   ourWork: {
//     title: "Bizim Fəaliyyətimiz",
//     text: [
//       "Biz kiçik bir emalatxana kimi fəaliyyətə başladıq, hər bir sifarişə fərdi yanaşma və detallara diqqət bizim əsas prinsiplərimiz oldu.",
//       "Bu gün biz Industrial dizaynın gözəlliyi və metal möhkəmliyi ahəngi ilə loft mebel elementlərini hazırlayırıq — qaynaq və yaradıcı baxışla sifarişlərinizi gerçəkləşdiririk. ", "Həmçinin müxtəlif çətinlik dərəcəsində qaynaq işləri də təklif edirik."
//     ],
//     image: ImageAboutUs_1,
//   },

//   cards: [
//     {
//       title: "Yaradıcılıq",
//       description: "Hər detalda fərqlilik və estetik baxış.",
//       icon: aboutIconX_Chair,
//     },
//     {
//       title: "Etibarlılıq",
//       description: "Layihələrdə dəqiqlik və vaxtında icra.",
//       icon: aboutIconClock_Desk,
//     },
//     {
//       title: "Təcrübə",
//       description: "Uzun illərin biliyi və təcrübəsi.",
//       icon: aboutIconExperience,
//     },
//   ],
// };

// export default aboutData;





import ImageAboutUs_1 from "../assets/images/beginning.webp";

import aboutIconX_Chair from "../assets/images/content_images/X-Chair.webp";
import aboutIconClock_Desk from "../assets/images/content_images/Clock-Desk.webp";
import aboutIconExperience from "../assets/images/content_images/experience.webp";

// изображения галереи
import galleryImg1 from "../assets/images/content_images/Clock-Desk.webp";
import galleryImg2 from "../assets/images/content_images/Clock-Desk.webp";
import galleryImg3 from "../assets/images/content_images/Clock-Desk.webp";
import galleryImg4 from "../assets/images/content_images/Clock-Desk.webp";

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
      "Həmçinin müxtəlif çətinlik dərəcəsində qaynaq işləri də təklif edirik."
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
      text: "Лофт-стол из металла и дерева",
    },
    {
      src: galleryImg2,
      text: "Сварочные работы",
    },
    {
      src: galleryImg3,
      text: "Стул в стиле Loft",
    },
    {
      src: galleryImg4,
      text: "Металлическая перегородка Loft",
    },
  ],
};

export default aboutData;