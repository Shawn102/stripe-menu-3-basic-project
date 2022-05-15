import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Billing from "./components/Billing";
import Customers from "./components/Customers";
import Error from "./components/Error";
import Help from "./components/Help";
import Home from "./components/Home";
import Libraries from "./components/Libraries";
import Payment from "./components/payment";
import Plugins from "./components/Plugins";
import Terminal from "./components/Terminal";
import { MyGlobalContext } from "./Context";

function App() {
  const { CloseSubmenu } = MyGlobalContext();
  return (
    <div className="App">
      <Navbar />

      {/* This div and 'onMouseOver' event for closing the nav when it's over all that's components */}
      <div onMouseOver={() => CloseSubmenu()}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/help" element={<Help />} />
          <Route path="/libraries" element={<Libraries />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/plugins" element={<Plugins />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
