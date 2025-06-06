import "./App.scss";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import WeldedItems from "./pages/WeldedItems/WeldedItems";
import Faq from "./pages/Faq/Faq";
import Contacts from "./pages/Contacts/Contacts";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/weldedItems" element={<WeldedItems />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
