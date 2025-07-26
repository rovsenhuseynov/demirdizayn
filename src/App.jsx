import "./App.scss";
import { Route, Routes } from "react-router";
import Layout from "./globalComponents/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Faq from "./pages/Faq/Faq";
import Contacts from "./pages/Contacts/Contacts";
import Jurnal from "./pages/Jurnal/Jurnal";
import Products from "./pages/Products/Products";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/AboutUs/AboutUs";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/jurnal" element={<Jurnal />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
