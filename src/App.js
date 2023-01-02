import "./App.css";
import Counter from "./components/Counter";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  console.log(window.location);
  let component;

  switch (window.location.pathname) {
    case "/":
      component = <App />;
    case "/counter":
      component = <Counter />;
      break;
    case "/contact":
      component = <Contact />;
      break;
    case "/about":
      component = <About />;
      break;
  }

  return (
    <div className="App">
      <Navbar />
      {component}
    </div>
  );
}

export default App;
