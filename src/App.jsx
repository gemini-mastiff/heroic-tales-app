import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle.jsx";
import WidthContainer from "./components/WidthContainer.jsx";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const AppStyled = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <AppStyled>
        <Header />
        <Main />
        <Footer />
      </AppStyled>
    </>
  );
}

export default App;
