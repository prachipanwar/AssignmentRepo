import HomeIndex from "./components/HomeIndex";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<HomeIndex />}></Route>
        </Routes>
      </Router>
      {/* <HomeIndex /> */}
    </>
  );
}

export default App;
