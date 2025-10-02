import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import HistoireDeLart from "./components/histoire_art/histoirte_art";
import { RenaissanceItalienne } from "./components/histoire_art/lessons/renaissance_italienne";
import { RenaissanceFrançaise } from "./components/histoire_art/lessons/renaissance-française";
import { StyleLouisXIII } from "./components/histoire_art/lessons/louis_xiii";
import { StyleLouisXIV } from "./components/histoire_art/lessons/louis_xiv";
import Panneaux from "./components/technologie/panneaux";
import { Directoire } from "./components/histoire_art/lessons/directoire";
import { StyleRestauration } from "./components/histoire_art/lessons/restauration";
import { StyleLouisPhilippe } from "./components/histoire_art/lessons/louis_philippe";
import { StyleEmpire } from "./components/histoire_art/lessons/empire";
import { ArtEgyptien } from "./components/histoire_art/lessons/egypte-antique";
import { ArtGrec } from "./components/histoire_art/lessons/grec-antique";
import { useState } from "react";
import { ArrowedLink } from "./utils/arrowed_link";
import { DroitDuTravail } from "./components/rh/droit-du-travail/droit-du-travail";

// Routes Ébénisterie
const histoireRoute = {path: "/ébénisterie/histoire-art", subs: [
  { path: "egypte-antique", element: <ArtEgyptien /> },
  { path: "grec-antique", element: <ArtGrec /> },
  { path: "renaissance-italienne", element: <RenaissanceItalienne /> },
  { path: "renaissance-française", element: <RenaissanceFrançaise />},
  { path: "louis-XIII", element: <StyleLouisXIII/>},
  { path: "louis-XIV", element: <StyleLouisXIV/>},
  { path: "directoire", element: <Directoire/>},
  { path: "restauration", element: <StyleRestauration/>},
  { path: "louis-philippe", element: <StyleLouisPhilippe/>},
  { path: "empire", element: <StyleEmpire/>},
]}

const panneauxRoute = {path: '/ébénisterie/panneaux', subs:[
]};

// Routes RH
const rhRoute = {
  path: "/ressources-humaines", subs: [
    {path: "droit-du-travail", element: <DroitDuTravail/>, name: "Droit du travail"},
    {path: "dialogue-social", element: <DroitDuTravail/>, name: "Dialogue social"},
    {path: "cartographie-des-compétences-métier", element: <DroitDuTravail/>, name: "Cartographie des compétences métier"},
    {path: "gepp", element: <DroitDuTravail/>, name: "GEPP"},
  ]
}

export const App = () => {

  const [navState, setNav] = useState("")
  const [moreNavElem, setMoreNav] = useState(<MoreNavHDA/>)

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
      <div className="navigation" onMouseLeave={() => {setNav("")}}>
        <div className="navbar">
            <div className="menu-left">
            <ul>
              <li>
                <Link to={"/"}>Accueil</Link>
              </li>
              <li onMouseEnter={() => {setNav("more-nav-open"); setMoreNav(<MoreNavHDA/>)}}>
                Ébénisterie
              </li>
              <li onMouseEnter={() => {setNav("more-nav-open"); setMoreNav(<MoreNavRH/>)}}>
                RH
              </li>
            </ul>
            </div>
            <div className="menu-right">
              <p>Journal de bord<span className="secondary-in-title">.</span></p>
            </div>
        </div>
        <div className={`more-nav ${navState}`}>
          {moreNavElem}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path={histoireRoute.path} element={<HistoireDeLart />} />
        <Route path={panneauxRoute.path} element={<Panneaux />} />
        {RenderRoute(histoireRoute)}
        {RenderRoute(panneauxRoute)}
        {RenderRoute(rhRoute)}
      </Routes>
        {/* <div className="photo-rest"></div> */}
    </BrowserRouter>
  );
};

const Accueil = () => {
  return (
    <>
      {/* <div className="photo accueil"></div> */}
      <h1 className="title accueil">Journal de bord<span className="secondary-in-title">.</span></h1>
      <div className="follow-mouse"></div>
    </>
  );
};

const MoreNavHDA = () => {
  return (
    <ul>
      <li>
        <ArrowedLink to={histoireRoute.path} link="Histoire de l'art" />
      </li>
      <li>
        <ArrowedLink to={panneauxRoute.path} link="Panneaux"></ArrowedLink>
      </li>
    </ul>
  )
}

const MoreNavRH = () => {
  return (
    <ul>
      {rhRoute.subs.map((route, index) => {
        return (
          <li>
            <ArrowedLink to={`${rhRoute.path}/${route.path}`} link={route.name} key={index}/>
          </li>
        )
      })}
    </ul>
  )
}