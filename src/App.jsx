import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from "./assents/styles/GlobalStyle";
import Login from "../src/pages/Login/index"

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/welcome" element={'###'} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

