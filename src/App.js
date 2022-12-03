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
          <h3>
            <em>- Dave Barry</em>
          </h3>
          <hr />
        </header>
        <main>
          <Dictionary defaultKeyword="yoga" />
        </main>
        <footer className="App-footer">
          <section>
            Coded by{" "}
            <a
              href="https://www.linkedin.com/in/jasmine-poole-421b101b7/"
              target="_blank"
              className="linkedIn"
              rel="noopener noreferrer"
            >
              Jasmine Poole
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/J2N8/dictionary-app"
              target="_blank"
              className="github"
              rel="noopener noreferrer"
            >
              open-sourced on GitHub,
            </a>{" "}
            <a
              href="https://dictionaryapp-reactjs.netlify.app/"
              target="_blank"
              className="netlify"
              rel="noopener noreferrer"
            >
              hosted on Netlify
            </a>
          </section>
        </footer>
      </div>
    </div>
  );
}
