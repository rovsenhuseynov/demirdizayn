import ShimmerWave from "../../reusableComponents/ShimmerWave/ShimmerWave";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <div className="contacts-page">
      <ShimmerWave text="BİZİMLƏ ƏLAQƏ SAXLAYIN..." />
      <p>Мы всегда рады вашим вопросам и предложениям!</p>

      <section className="contact-info">
        <h2>Наши контакты</h2>
        <p>Адрес: г. Баку, ул. Примерная, 123</p>
        <p>
          Телефон: <a href="tel:+994501234567">+994 50 123 45 67</a>
        </p>
        <p>
          Email: <a href="mailto:info@example.com">info@example.com</a>
        </p>
        <p>Часы работы: Пн-Пт 09:00–18:00</p>
      </section>

      <section className="contact-form">
        <h2>Напишите нам</h2>
        <form>
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </section>

      <section className="contact-map">
        <h2>Где мы находимся</h2>
        <iframe
          title="Карта торгового центра Sədərək Ticarət Mərkəzi"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps?q=40.327167,49.78269&z=14&hl=ru&output=embed"
        ></iframe>
      </section>

      <section className="social-links">
        <h2>Мы в соцсетях</h2>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">LinkedIn</a>
      </section>
    </div>
  );
};

export default Contacts;
