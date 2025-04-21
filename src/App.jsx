import GlobalStyle from "./components/GlobalStyle.jsx";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <header className="header">
          <h1>Heroic Tales</h1>
        </header>
        <main className="main">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam hic
            voluptate aspernatur, laudantium nostrum voluptas beatae perferendis
            libero consectetur non necessitatibus consequuntur nobis deleniti
            ullam quisquam ad distinctio reprehenderit eum!
          </p>
        </main>
        <footer className="footer">
          <p>Footer Placeholder</p>
        </footer>
      </div>
    </>
  );
}

export default App;
