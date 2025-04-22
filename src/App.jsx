import GlobalStyle from "./components/GlobalStyle.jsx";
import WidthContainer from "./components/WidthContainer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
