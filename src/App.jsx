import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.scss";
import HistoireDeLart from "./components/histoire_art/histoirte_art";
import { RenaissanceItalienne } from "./components/histoire_art/lessons/renaissance_italienne";
import { useEffect } from "react";
import { useState } from "react";


export const App = () => {
  const histoire_routes = [
    { path: "renaissance-italienne", element: <RenaissanceItalienne /> },
  ];


  return (
    <BrowserRouter>
        <div className="left-menu">
          <h3>Menu</h3>
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
    <div className="main-page">
      <h1 className="title">Ébénisterie</h1>
      <div className="menu-layer">
        <MenuList />
      </div>
      <div className="photo"></div>
    </div>
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
