import GlobalStyle from "./components/GlobalStyle.jsx";
import WidthContainer from "./components/WidthContainer.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Header />
        <main className="main">
          <WidthContainer>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam hic
              voluptate aspernatur, laudantium nostrum voluptas beatae
              perferendis libero consectetur non necessitatibus consequuntur
              nobis deleniti ullam quisquam ad distinctio reprehenderit eum!
            </p>
          </WidthContainer>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
