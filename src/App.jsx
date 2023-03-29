import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import styled from "styled-components";
import GlobalStyle from "./assents/styles/GlobalStyle";
import Login from "./pages/login";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

