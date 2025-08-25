import ImageAboutUs_1 from "../assets/images/beginning.webp";

import aboutIconX_Chair from "../assets/images/content_images/X-Chair.webp";
import aboutIconClock_Desk from "../assets/images/content_images/Clock-Desk.webp";
import aboutIconExperience from "../assets/images/content_images/experience.webp";

const aboutData = {
  hero: {
    title: "Haqqımızda",
    overlayText: "Gücümüz — hər detalı incəliklə gözdən keçirməkdir.",
  },

  mission: {
    title: "Bizim Missiyamız",
    text: [
      "Biz kiçik bir emalatxana kimi fəaliyyətə başladıq, hər bir sifarişə fərdi yanaşma və detallara diqqət bizim əsas prinsiplərimiz oldu.",
      "Yaradıcı yanaşma və dəqiqliklə, hər bir layihəni özünəməxsus və dəyərli edirik.",
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
};

export default aboutData;
