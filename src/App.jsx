import { useState } from "react";
import data from "./data";
import Navbar from "./components/Nav";
import Header from "./components/Header";
import Books from "./components/books";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
