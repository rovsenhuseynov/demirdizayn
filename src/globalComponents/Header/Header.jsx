// import "./Header.scss";
// import HeaderNav from "./HeaderNav/HeaderNav";

// const Header = () => {
//   return (
//     <div className="header">
//       <HeaderNav />
//       <div className="header__title">
//         <h1 className="header__main-title">
//           Loft Mebel və
//           <br />
//           <span className="highlight">Metal İşləri</span>
//         </h1>
//         <p className="header__subtitle">Качество на высоком уровне</p>
//       </div>
//     </div>
//   );
// };

// export default Header;




import "./Header.scss";
import HeaderNav from "./HeaderNav/HeaderNav";

const Header = () => {
  return (
    <div className="header">
      <HeaderNav />
      <div className="header__title">
        <h1 className="header__main-title">
          Loft Mebel və
          <br />
          Metal İşləri
        </h1>
        <p className="header__subtitle">Качество на высоком уровне</p>
      </div>
    </div>
  );
};

export default Header;