import "./App.css";
import { Home } from "./pages/Index";
import { Header } from "./components/Index";

function App() {
  return (
    <div className="App">
      <section id="main-dashboard-content">
        <Header />
        <br />
        <Home />
        <h1 id="welcome-title">Welcome to YourSky Global Education</h1>
        <section id="grid-container">
          <div className="grid-item one">Item 1</div>
          <div className="grid-item two">Item 2</div>
          <div className="grid-item three">Item 3</div>
          <div className="grid-item four">Item 4</div>
        </section>
      </section>
    </div>
  );
}

export default App;
