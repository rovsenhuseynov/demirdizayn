// import { useEffect } from "react";
// import ShimmerWave from "../../reusableComponents/ShimmerWave/ShimmerWave";
// import { socialLinks } from "../../data/contactsData";
// import "./Contacts.scss";

// const Contacts = () => {
//   // При первом рендере страницы скроллим вверх
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="contacts-page">
//       <ShimmerWave text="BİZİMLƏ ƏLAQƏ SAXLAYIN..." />
//       <p>Suallarınız və təklifləriniz bizi həmişə sevindirir!</p>

//       <section className="contact-info">
//         <h2>Bizim əlaqələr</h2>
//         <p>Adres: Bakı, Təxminən küçəsi, 123</p>
//         <p>
//           Telefon: <a href="tel:+994501234567">+994 50 123 45 67</a>
//         </p>
//         <p>
//           WhatsApp: <a href="tel:+994501234567">+994 50 123 45 67</a>
//         </p>
//         <p>
//           Email: <a href="mailto:info@example.com">info@example.com</a>
//         </p>
//         <p>İş saatları: B.e - C 09:00-18:00</p>
//       </section>

//       <section className="contact-form">
//         <h2>Bizimlə əlaqə saxlayın</h2>
//         <form>
//           <input type="text" placeholder="Имя" required />
//           <input type="email" placeholder="Email" required />
//           <textarea placeholder="Сообщение" required></textarea>
//           <button type="submit">Отправить</button>
//         </form>
//       </section>

//       <section className="contact-map">
//         <h2>Где мы находимся</h2>
//         <iframe
//           title="Карта торгового центра Sədərək Ticarət Mərkəzi"
//           width="100%"
//           height="400"
//           style={{ border: 0 }}
//           loading="lazy"
//           allowFullScreen
//           src="https://www.google.com/maps?q=40.327167,49.78269&z=14&hl=ru&output=embed"
//         ></iframe>
//       </section>

//       <section className="social-links">
//         <h2 className="social-links__title">Мы в соцсетях</h2>
//         <div className="social-links__wrapper">
//           {socialLinks.map(({ name, url, icon }) => (
//             <a
//               key={name}
//               href={url}
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label={name}
//             >
//               <img src={icon} alt={name} className="social-icon" />
//             </a>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contacts;



import { useEffect } from "react";
import ShimmerWave from "../../reusableComponents/ShimmerWave/ShimmerWave";
import { contactsData } from "../../data/contactsData";
import "./Contacts.scss";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { shimmerText, introText, info, form, map, social } = contactsData;

  return (
    <div className="contacts-page">
      <ShimmerWave text={shimmerText} />
      <p>{introText}</p>

      <section className="contact-info">
        <h2>{info.title}</h2>
        <p>Adres: {info.address}</p>
        <p>
          Telefon: <a href={`tel:${info.phone}`}>{info.phone}</a>
        </p>
        <p>
          WhatsApp: <a href={`tel:${info.whatsapp}`}>{info.whatsapp}</a>
        </p>
        <p>
          Email: <a href={`mailto:${info.email}`}>{info.email}</a>
        </p>
        <p>İş saatları: {info.workingHours}</p>
      </section>

      <section className="contact-form">
        <h2>{form.title}</h2>
        <form>
          {form.fields.map((field, i) =>
            field.type === "textarea" ? (
              <textarea
                key={i}
                placeholder={field.placeholder}
                required={field.required}
              ></textarea>
            ) : (
              <input
                key={i}
                type={field.type}
                placeholder={field.placeholder}
                required={field.required}
              />
            )
          )}
          <button type="submit">{form.submitText}</button>
        </form>
      </section>

      <section className="contact-map">
        <h2>{map.title}</h2>
        <iframe
          title="Карта"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={map.src}
        ></iframe>
      </section>

      <section className="social-links">
        <h2 className="social-links__title">{social.title}</h2>
        <div className="social-links__wrapper">
          {social.links.map(({ name, url, icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <img src={icon} alt={name} className="social-icon" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contacts;
