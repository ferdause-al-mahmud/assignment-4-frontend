import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Footer from '@/pages/Footer'
function App() {
  return (
    <div className="">
      <Navbar />
      {/* <Navbar /> */}
      <div className="container min-h-[calc(100vh-200px)] mt-16 mx-auto">
        <Outlet />
      </div>
      {/* <p>Footer</p> */}
      <Footer />
    </div>
  );
}

export default App;
