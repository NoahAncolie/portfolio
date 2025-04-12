import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import HistoireDeLart from "./components/histoire_art/histoirte_art";
import { RenaissanceItalienne } from "./components/histoire_art/lessons/renaissance_italienne";
import { RenaissanceFrançaise } from "./components/histoire_art/lessons/renaissance-française";
import { StyleLouisXIII } from "./components/histoire_art/lessons/louis_xiii";
import { StyleLouisXIV } from "./components/histoire_art/lessons/louis_xiv";
import Technologie from "./components/technologie/technologie";
import { Directoire } from "./components/histoire_art/lessons/directoire";

const histoireRoute = {path: "/histoire-art", subs: [
  { path: "renaissance-italienne", element: <RenaissanceItalienne /> },
  { path: "renaissance-française", element: <RenaissanceFrançaise />},
  { path: "louis-XIII", element: <StyleLouisXIII/>},
  { path: "louis-XIV", element: <StyleLouisXIV/>},
  { path: "directoire", element: <Directoire/>},
]}

const technologieRoute = {path: '/technologie', subs:[
]};

export const App = () => {


  const RenderRoute = (route) => {
    return (<>
      {route.subs.map((subRoute, index) => (
          <Route
            key={index}
            path={route.path + '/' + subRoute.path}
            element={subRoute.element}
          ></Route>
        ))}
    </>)
  }


  return (
    <BrowserRouter>
        <div className="left-menu">
          <ul>
            <li>
              <Link to={histoireRoute.path}>Histoire de l'art</Link>
            </li>
            <li>
              <Link to={technologieRoute.path}>Technologie</Link>
            </li>
            <li>
              <Link to={""}>Exposés</Link>
            </li>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>
          </ul>
        </div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path={histoireRoute.path} element={<HistoireDeLart />} />
        <Route path={technologieRoute.path} element={<Technologie />} />
        {RenderRoute(histoireRoute)}
        {RenderRoute(technologieRoute)}
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
        <Link to={histoireRoute.path}>Histoire de l'art</Link>
      </li>
      <li>
        <Link to={technologieRoute.path}>Technologie</Link>
      </li>
      <li>
        <Link to={""}>Exposés</Link>
      </li>
    </ul>
  );
};
