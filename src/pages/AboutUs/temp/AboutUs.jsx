import "./AboutUs.scss";
import { useEffect, useState, useMemo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Отслеживаем ширину экрана, чтобы на мобилках убрать горизонтальные сдвиги
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 768px)");
    const apply = () => setIsMobile(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, [isMobile]);

  // На мобильных заменяем fade-left/right на fade-up (вертикально, без «выпирания»)
  const fadeLeft = useMemo(
    () => (isMobile ? "fade-up" : "fade-left"),
    [isMobile]
  );
  const fadeRight = useMemo(
    () => (isMobile ? "fade-up" : "fade-right"),
    [isMobile]
  );

  return (
    <section className="about">
      <h1 className="about__title" data-aos="fade-up">
        Haqqımızda
      </h1>

      {/* Hero */}
      <div className="about__hero">
        <div className="about__overlay">
          <p data-aos="fade-up" data-aos-delay="200">
            Gücümüz — hər detalı incəliklə gözdən keçirməkdir.
          </p>
        </div>
      </div>








      {/* Company (Şirkət) */}

      <div className="about__company">
        <div className="about__text" data-aos="zoom-in" data-aos-delay="300">
          <h2>Nədən başladıq</h2>
          <div className="text-block" data-aos="fade-up" data-aos-delay="400">
            <div className="text-block__title">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/workshop.png"
                alt="Başlanğıc"
              />
              Bizim başlanğıcımız
            </div>
            <p>
              Biz kiçik bir emalatxana kimi fəaliyyətə başladıq, hər bir
              sifarişə fərdi yanaşma və detallara diqqət bizim əsas
              prinsiplərimiz oldu.
            </p>
          </div>
          <div className="text-block" data-aos="fade-up" data-aos-delay="500">
            <div className="text-block__title">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/furniture.png"
                alt="Продукция"
              />
              Nə yaradırıq
            </div>
            <p>
              Bu gün biz loft üslubunda mebel elementləri, interyer üçün unikal
              əşyalar və funksional konstruksiyalar hazırlayırıq. Onlar evin,
              ofisin və ya məkanın atmosferinə uyğunlaşaraq onun bir hissəsinə
              çevrilir.
            </p>
          </div>
          <div className="text-block" data-aos="fade-up" data-aos-delay="600">
            <div className="text-block__title">
              <img
                src="https://img.icons8.com/ios-filled/24/000000/welding.png"
                alt="Услуги"
              />
              Bizim xidmətlərimiz
            </div>
            <p>
              Bu — öz ruhu olan, etibarlı, sadə formalı və incə işlənmiş
              məhsullardır. Həmçinin müxtəlif çətinlik dərəcəsində qaynaq işləri
              də təklif edirik.
            </p>
          </div>
          {/* <a href="#learn-more" className="about__button">Узнать больше</a> */}
        </div>
        <div className="about__image" data-aos="zoom-in" data-aos-delay="700">
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt="Команда"
          />
        </div>
      </div>









      {/* Values */}
      <div className="about__values">
        <h2 data-aos="fade-up">Наши ценности</h2>
        <div className="about__cards">
          <div className="about__card" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://img.icons8.com/ios-filled/100/4CAF50/quality.png"
              alt="Качество"
            />
            <h3>Качество</h3>
            <p>Материалы и работа без компромиссов.</p>
          </div>
          <div className="about__card" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://img.icons8.com/ios-filled/100/2196F3/idea.png"
              alt="Индивидуальность"
            />
            <h3>Индивидуальность</h3>
            <p>Каждый проект отражает характер заказчика.</p>
          </div>
          <div className="about__card" data-aos="zoom-in" data-aos-delay="300">
            <img
              src="https://img.icons8.com/ios-filled/100/FF9800/handshake.png"
              alt="Честность"
            />
            <h3>Честность</h3>
            <p>Открытость и доверие на каждом этапе.</p>
          </div>
        </div>
      </div>


      

      {/* Gallery */}
      <div className="about__gallery">
        <h2 data-aos="fade-up">Наши проекты</h2>
        <div className="about__grid">
          <div className="about__item" data-aos="zoom-in">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
              alt="Project1"
            />
            <div className="about__overlay-text">Современный интерьер</div>
          </div>
          <div className="about__item" data-aos="zoom-in" data-aos-delay="100">
            <img
              src="https://images.unsplash.com/photo-1586105251261-72a756497a12"
              alt="Project2"
            />
            <div className="about__overlay-text">Скандинавский стиль</div>
          </div>
          <div className="about__item" data-aos="zoom-in" data-aos-delay="200">
            <img
              src="https://images.unsplash.com/photo-1556905055-8f358a7a47b2"
              alt="Project3"
            />
            <div className="about__overlay-text">Уют и дерево</div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="about__cta">
        <div className="about__cta-inner" data-aos="fade-up">
          <h3>
            Если вы ищете нестандартные решения, хотите реализовать собственную
            идею или просто цените качественный металл и стиль «лофт» — мы
            готовы к сотрудничеству. Ваши идеи, наши руки — и результат, который
            вдохновляет.
          </h3>
          <p>Свяжитесь с нами и создайте уют вместе с нами.</p>
          <button className="about__btn">Связаться</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
