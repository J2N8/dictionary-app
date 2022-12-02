import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dic·tion·ar·y</h1>
          <hr />
          <h3>
            If you have a big enough dictionary, just about everything is a
            word. 
          </h3>
          <h3><em>- Dave Barry</em></h3>
          <hr />
        </header>
        <main>
          <Dictionary defaultKeyword="sunrise" />
        </main>
        <footer className="App-footer">
          <small>Coded by Jasmine Poole</small>
        </footer>
      </div>
    </div>
  );
}
