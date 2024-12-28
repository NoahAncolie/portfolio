import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import HistoireDeLart from "./components/histoire_art/histoirte_art";
import { RenaissanceItalienne } from "./components/histoire_art/lessons/renaissance_italienne";

interface AppProps {}

interface AppState {}

export class App extends React.Component<AppProps, AppState> {

  histoire_routes = [
    { path: "renaissance-italienne", element: <RenaissanceItalienne /> },
  ];

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="histoire-art" element={<HistoireDeLart />} />
          {this.histoire_routes.map((route, index) => (
            <Route
              key={index}
              path={"histoire-art/" + route.path}
              element={route.element}
            ></Route>
          ))}
        </Routes>
      </BrowserRouter>
    );
  }
}

const Accueil = () => {
  return (
    <div className="main-page">
      <h1 className="title">Ébénisterie</h1>
      <div className="menu-layer">
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
      </div>
      <div className="photo"></div>
    </div>
  );
};
