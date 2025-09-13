// // src/data/contactsData.js
// import instagramIcon from "../assets/icons/Social_networks/instagram/instagram.svg";
// import facebookIcon from "../assets/icons/Social_networks/facebook/facebook.svg";
// import telegramIcon from "../assets/icons/Social_networks/telegram/telegram.svg";
// import whatsappIcon from "../assets/icons/Social_networks/whatsapp/whatsapp.svg";

// export const socialLinks = [
//   {
//     name: "Instagram",
//     url: "https://www.instagram.com",
//     icon: instagramIcon,
//   },
//   {
//     name: "Facebook",
//     url: "https://www.facebook.com",
//     icon: facebookIcon,
//   },
//   {
//     name: "Telegram",
//     url: "https://www.telegram.org",
//     icon: telegramIcon,
//   },
//   {
//     name: "WhatsApp",
//     url: "https://wa.me/79991234567",
//     icon: whatsappIcon,
//   },
// ];




import instagramIcon from "../assets/icons/Social_networks/instagram/instagram.svg";
import facebookIcon from "../assets/icons/Social_networks/facebook/facebook.svg";
import telegramIcon from "../assets/icons/Social_networks/telegram/telegram.svg";
import whatsappIcon from "../assets/icons/Social_networks/whatsapp/whatsapp.svg";

export const contactsData = {
  shimmerText: "BİZİMLƏ ƏLAQƏ SAXLAYIN...",
  introText: "Suallarınız və təklifləriniz bizi həmişə sevindirir!",

  info: {
    title: "Bizim əlaqələr",
    address: "Bakı, Təxminən küçəsi, 123",
    phone: "+994501234567",
    whatsapp: "+994501234567",
    email: "info@example.com",
    workingHours: "B.e - C 09:00-18:00",
  },

  form: {
    title: "Bizimlə əlaqə saxlayın",
    fields: [
      { type: "text", placeholder: "Имя", required: true },
      { type: "email", placeholder: "Email", required: true },
      { type: "textarea", placeholder: "Сообщение", required: true },
    ],
    submitText: "Отправить",
  },

  map: {
    title: "Где мы находимся",
    src: "https://www.google.com/maps?q=40.327167,49.78269&z=14&hl=ru&output=embed",
  },

  social: {
    title: "Мы в соцсетях",
    links: [
      { name: "Instagram", url: "https://www.instagram.com", icon: instagramIcon },
      { name: "Facebook", url: "https://www.facebook.com", icon: facebookIcon },
      { name: "Telegram", url: "https://www.telegram.org", icon: telegramIcon },
      { name: "WhatsApp", url: "https://wa.me/79991234567", icon: whatsappIcon },
    ],
  },
};