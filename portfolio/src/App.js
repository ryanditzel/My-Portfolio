import "./styles/App.css";
import React from "react";
import Nav from "./components/Nav";
import Landing from "./pages/Landing";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
