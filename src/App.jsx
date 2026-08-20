import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { FormularioDeEvento } from "./components/FormularioDeEvento";
function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header>
        <img src="/logo.png" alt="Logo do Tecboard na cor branca" />
      </header>
      <section>
        <img src="/banner.png" alt="Banner do Tecboard" />
      </section>
      <FormularioDeEvento />
    </main>
  );
}

export default App;
