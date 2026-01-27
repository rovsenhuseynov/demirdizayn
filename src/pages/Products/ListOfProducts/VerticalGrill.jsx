// import { useState } from "react";
// import "./VerticalGrill.scss";
// import img1 from "../../../assets/images/product-images/ekoManqal/smallSize/ekoManqal_small_1.webp";
// import img2 from "../../../assets/images/product-images/ekoManqal/smallSize/ekoManqal_small_2.webp";
// import img3 from "../../../assets/images/product-images/ekoManqal/smallSize/ekoManqal_small_3.webp";
// import img4 from "../../../assets/images/product-images/ekoManqal/smallSize/ekoManqal_small_4.webp";
// import img5 from "../../../assets/images/product-images/ekoManqal/smallSize/ekoManqal_small_5.webp";


// const VerticalGrill = () => {
//   const images = [img1, img2, img3, img4, img5];
//   const [current, setCurrent] = useState(0);

//   const handleClick = (index) => setCurrent(index);

//   return (
//     <section className="verticalGrill">
//       {/* HEADER ABOVE IMAGES */}
//       <div className="verticalGrill__header">
//         <h1>Eco-Manqal</h1>
//         <p className="subtitle">Sağlam və təhlükəsiz bişirmənin №1 seçimi</p>
//       </div>

//       <div className="card-wrapper">
//         <div className="card">
//           {/* LEFT: Images */}
//           <div className="product-imgs">
//             <div className="img-display">
//               <div
//                 className="img-showcase"
//                 style={{ transform: `translateX(-${current * 100}%)` }}
//               >
//                 {images.map((img, idx) => (
//                   <img key={idx} src={img} alt={`Eco Manqal ${idx + 1}`} />
//                 ))}
//               </div>
//             </div>
//             <div className="img-select">
//               {images.map((img, idx) => (
//                 <div className="img-item" key={idx}>
//                   <button
//                     type="button"
//                     onClick={() => handleClick(idx)}
//                     className={current === idx ? "active" : ""}
//                   >
//                     <img src={img} alt={`Thumbnail ${idx + 1}`} />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT: Content */}
//           <div className="product-content">
//             <div className="product-detail">
//               <h3>
//                 ⭐ 1. Ən vacibi — daha təhlükəsiz və daha sağlam bişirirsən
//               </h3>
//               <p>
//                 Eco-manqalın ən böyük üstünlüyü məhz budur. Yağ kömürün üstünə
//                 düşmədiyi üçün benzopiren kimi zərərli kanserogen maddələr əmələ
//                 gəlmir.
//               </p>
//               <ul>
//                 <li>Tüstü və yanıq qoxusu olmur</li>
//                 <li>Ət daha təmiz, sağlam və təbii dadır</li>
//                 <li>Ailə üçün daha təhlükəsiz bişirmə üsuludur</li>
//                 <li>Evin yanında bişirmək daha risksizdir</li>
//               </ul>

//               <h3>⭐ 2. Bir dəfəlik ikiqat çox bişirirsən</h3>
//               <p>
//                 Manqalın hər iki tərəfi işləyir — eyni sayda şiş sağa və sola
//                 qoyulur. Kömür ortada, ət iki tərəfdən də ideal bişir.
//               </p>
//               <strong>
//                 Beləliklə eyni kömürlə ikiqat çox məhsul hazırlamaq olur
//               </strong>

//               <h3>⭐ 3. Demək olar ki, tüstüsüz</h3>
//               <p>
//                 Yağ alovun içərisinə düşmədiyi üçün nə tüstü var, nə də
//                 yandırılmış qoxu. Bu, həyətin içində, terasda və dar yerdə belə
//                 rahat istifadə imkanı yaradır.
//               </p>

//               <h3>⭐ 4. Ət daha şirəli və təmiz olur</h3>
//               <p>
//                 Yanıq yoxdur, alov dəymir, yağ yanmır. Dad daha təmiz, struktura
//                 daha yumşaq, ət daha şirəli olur.
//               </p>

//               <h3>⭐ 5. Çox yığcamdır</h3>
//               <p>
//                 Adi manqaldan qat-qat az yer tutur. Dar həyətlər, teraslar, bağ
//                 evləri üçün ideal seçimdir. Daşınması və saxlanılması daha
//                 rahatdır.
//               </p>

//               <h3>⭐ 6. Kömürə 30–40% qənaət</h3>
//               <p>
//                 Eco-manqal istiliyi içəridə saxlayır və yuxarıya az dağılır. Az
//                 kömürlə daha çox nəticə.
//               </p>

//               <h3>⭐ 7. Təmiz bişirmə — ətraf çirklənmir</h3>
//               <p>
//                 Yağ altındakı qaba axdığı üçün nə manqal çirklənir, nə də yer.
//                 Sonda təmizləmək də çox asandır.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VerticalGrill;






import { useState } from "react";
import "./VerticalGrill.scss";
import { productsItemData } from "../../../data/productsItemData";

const VerticalGrill = () => {
  const product = productsItemData.find(
    (item) => item.slug === "eco-manqal"
  );

  const [current, setCurrent] = useState(0);

  if (!product) return null;

  return (
    <section className="verticalGrill">
      <div className="verticalGrill__header">
        <h1>{product.title}</h1>
        <p className="subtitle">{product.subtitle}</p>
      </div>

      <div className="card-wrapper">
        <div className="card">
          {/* IMAGES */}
          <div className="product-imgs">
            <div className="img-display">
              <div
                className="img-showcase"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {product.images.map((img, idx) => (
                  <img key={idx} src={img} alt={`${product.title} ${idx + 1}`} />
                ))}
              </div>
            </div>

            <div className="img-select">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={current === idx ? "active" : ""}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} />
                </button>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="product-content">
            {product.advantages.map((item, idx) => (
              <div className="product-detail" key={idx}>
                <h3>⭐ {idx + 1}. {item.title}</h3>
                <p>{item.text}</p>

                {item.list && (
                  <ul>
                    {item.list.map((li, i) => (
                      <li key={i}>{li}</li>
                    ))}
                  </ul>
                )}

                {item.strong && <strong>{item.strong}</strong>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerticalGrill;