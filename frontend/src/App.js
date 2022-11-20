import { BrowserRouter as Router } from "react-router-dom";
// BEGIN: VENDOR CSS 
import "./app-assets/vendors/vendors.min.css";
import "./app-assets/vendors/animate-css/animate.css";
import "./app-assets/vendors/chartist-js/chartist.min.css";
import "./app-assets/vendors/chartist-js/chartist-plugin-tooltip.css";
// END: VENDOR CSS
// BEGIN: Page Level CSS
import "./app-assets/css/themes/vertical-modern-menu-template/materialize.css";
import "./app-assets/css/themes/vertical-modern-menu-template/style.css";
import "./app-assets/css/pages/dashboard-modern.css";
import "./app-assets/css/pages/intro.css";
// END: Page Level CSS 
// Custom CSS
import "./app-assets/css/custom/custom.css";
// Components Import
import Header from "./components/template/Header";
import Sidebar from "./components/template/Sidebar";
// import Footer from "./components/template/Footer";
import RouteApp from "./components/RouteApp";
const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Sidebar />
        <RouteApp/>
        {/* <Footer /> */}
     </Router>
    </div>
  );
};

export default App;
