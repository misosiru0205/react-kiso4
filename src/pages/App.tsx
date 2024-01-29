import { BrowserRouter,Routes,Route } from "react-router-dom";

import "./App.scss";
import Home from "./Home";

const App:React.FC = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
