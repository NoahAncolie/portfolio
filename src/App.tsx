import React from "react";
import "./App.css";
interface AppProps {}

interface AppState {}

export class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="photo"></div>
        <h1 className="title">Adrien Benaceur</h1>
      </div>
    );
  }
}
