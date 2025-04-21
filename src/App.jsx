import GlobalStyle from "./components/GlobalStyle.jsx";
import Footer from "./components/Footer.jsx";
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
        <Footer />
      </div>
    </>
  );
}

export default App;
