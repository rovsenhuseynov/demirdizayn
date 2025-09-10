// import { useState } from "react";
// import ReactDOM from "react-dom";
// import "./PhotoGallery.scss";

// const Modal = ({ closeModal, src }) => {
//   return (
//     <div className="modal-overlay" onClick={closeModal}>
//       <div className="modal">
//         <img src={src} alt="Modal" />
//       </div>
//     </div>
//   );
// };

// const PhotoGallery = ({ images1 = [], images2 = [] }) => {
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
                className="box"
                style={{ backgroundImage: `url(${src})` }}
                onClick={() => openModal(src)}
              ></div>
            ))}
          </div>

          <div className="row backward">
            {images2.map((src, index) => (
              <div
                key={index}
                className="box"
                style={{ backgroundImage: `url(${src})` }}
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