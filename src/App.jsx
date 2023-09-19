import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import UseFilterContext from "./context/UseFilterContext";

const App = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <UseFilterContext>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UseFilterContext>
    </main>
  );
};

export default App;
