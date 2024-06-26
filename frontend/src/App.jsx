import { Outlet } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ToastContainer />
      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
