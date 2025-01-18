import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import HistoireDeLart from "./components/histoire_art/histoirte_art";
import { RenaissanceItalienne } from "./components/histoire_art/lessons/renaissance_italienne";
import { RenaissanceFrançaise } from "./components/histoire_art/lessons/renaissance-française";
import { StyleLouisXIII } from "./components/histoire_art/lessons/louis_xiii";
import { StyleLouisXIV } from "./components/histoire_art/lessons/louis_xiv";


export const App = () => {
  const histoire_routes = [
    { path: "renaissance-italienne", element: <RenaissanceItalienne /> },
    { path: "renaissance-française", element: <RenaissanceFrançaise />},
    { path: "louis-XIII", element: <StyleLouisXIII/>},
    { path: "louis-XIV", element: <StyleLouisXIV/>},
  ];


  return (
    <BrowserRouter>
        <div className="left-menu">
          <ul>
            <li>
              <Link to={"/histoire-art"}>Histoire de l'art</Link>
            </li>
            <li>
              <Link to={"/histoire-art"}>Technologie</Link>
            </li>
            <li>
              <Link to={"/histoire-art"}>Exposés</Link>
            </li>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
          </ul>
        </div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="histoire-art" element={<HistoireDeLart />} />
        {histoire_routes.map((route, index) => (
          <Route
            key={index}
            path={"histoire-art/" + route.path}
            element={route.element}
          ></Route>
        ))}
      </Routes>
    </BrowserRouter>
  );
};

const Accueil = () => {
  return (
    <>
      <div className="main-page">
        <h1 className="title">Ébénisterie</h1>
        <h2>Suivi d'apprentissage par Adrien Benaceur</h2>
        <div className="menu-layer">
          <MenuList />
        </div>
      </div>
      <div className="photo"></div>
    </>
  );
};

const MenuList = () => {
  return (
    <ul>
      <li>
        <Link to={"/histoire-art"}>Histoire de l'art</Link>
      </li>
      <li>
        <Link to={"/histoire-art"}>Technologie</Link>
      </li>
      <li>
        <Link to={"/histoire-art"}>Exposés</Link>
      </li>
    </ul>
  );
};
