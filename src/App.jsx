import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
// import Vid  from "./components/Vid.jsx";
import Vid from "./components/Vid.jsx";

function App() {
  return (
    // <div className="h-screen w-full text-white bg-neutral-800">
    <div className="h-screen w-full  bg-neutral-200 ">
      <Nav />
      <Home />
      <Vid />
    </div>
  );
}

export default App;
