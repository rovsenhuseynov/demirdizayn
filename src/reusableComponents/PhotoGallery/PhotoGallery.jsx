// import { useState } from "react";
// import ReactDOM from "react-dom";
// import "./PhotoGallery.scss";

// import image1 from "../../assets/images/aboutUsGallery/Adjustable-height-bar-stool.webp";
// import image2 from "../../assets/images/aboutUsGallery/Loft-shelf.jpg";
// import image3 from "../../assets/images/aboutUsGallery/Loft-style-bar-set.jpg";
// import image4 from "../../assets/images/aboutUsGallery/Loft-style-metal-chair.jpg";
// import image5 from "../../assets/images/aboutUsGallery/Loft-style-metal-chair_1.jpg";
// import image6 from "../../assets/images/aboutUsGallery/Loft-style-wall-shelf.jpg";
// import image7 from "../../assets/images/aboutUsGallery/Loft-table-and-benches.jpg";
// import image8 from "../../assets/images/aboutUsGallery/mangal_4.jpg";

// const Modal = ({ closeModal, src }) => {
//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal">
//         <img src={src} alt="Modal" />
//       </div>
//     </div>
//   );
// };

// const images1 = [
//   image1,
//   image2,
//   image3,  //!
//   image4,  //!
//   image1,
//   image2,
//   image3,  //!
//   image4,  //!
// ];
// const images2 = [
//   image5,
//   image6,
//   image7,  //!
//   image8,  //!
//   image5,
//   image6,
//   image7,  //!
//   image8,  //!
// ];

// const PhotoGallery = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [modalImageSrc, setModalImageSrc] = useState("");

//   const openModal = (src) => {
//     setModalImageSrc(src);
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   return (
//     <div className="photo-gallery__wrapper">
//       <div id="grid-container">
//         <div className="grid">
//           <div className="row forward">
//             {images1.map((src, index) => (
//               <div
//                 key={index}
//                 className={`box fill${(index % 4) + 1}`}
//                 onClick={() => openModal(src)}
//               ></div>
//             ))}
//           </div>

//           <div className="row backward">
//             {images2.map((src, index) => (
//               <div
//                 key={index}
//                 className={`box fill${(index % 4) + 5}`}
//                 onClick={() => openModal(src)}
//               ></div>
//             ))}
//           </div>
//         </div>
//       </div>
//       {modalOpen &&
//         ReactDOM.createPortal(
//           <Modal closeModal={closeModal} src={modalImageSrc} />,
//           document.getElementById("modal-root")
//         )}
//     </div>
//   );
// };

// export default PhotoGallery;



import { useState } from "react";
import ReactDOM from "react-dom";
import "./PhotoGallery.scss";

const Modal = ({ closeModal, src }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal">
        <img src={src} alt="Modal" />
      </div>
    </div>
  );
};

const PhotoGallery = ({ images1 = [], images2 = [] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  const openModal = (src) => {
    setModalImageSrc(src);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="photo-gallery__wrapper">
      <div id="grid-container">
        <div className="grid">
          <div className="row forward">
            {images1.map((src, index) => (
              <div
                key={index}
                className={`box fill${(index % 4) + 1}`}
                onClick={() => openModal(src)}
              ></div>
            ))}
          </div>

          <div className="row backward">
            {images2.map((src, index) => (
              <div
                key={index}
                className={`box fill${(index % 4) + 5}`}
                onClick={() => openModal(src)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {modalOpen &&
        ReactDOM.createPortal(
          <Modal closeModal={closeModal} src={modalImageSrc} />,
          document.getElementById("modal-root")
        )}
    </div>
  );
};

export default PhotoGallery;