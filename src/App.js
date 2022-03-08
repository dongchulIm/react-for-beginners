import{
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./routes/Home.js"
import Detail from "./routes/Detail.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Hello" element={<h1>Hello!!!</h1>}></Route>
        <Route path={`${process.env.PUBLIC_URL}/`}  element={<Home/>}></Route>
        <Route path="/movie/:test" element={<Detail/>}></Route>
      </Routes>
    </Router>
  );
}
export default App;
