import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import files from "./pages/Files";
import Support from "./pages/Support";
import Messages from "./pages/Messages";
import Login from "./pages/Login";
import PageNotFound from './pages/404'
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/" exact component={Login} />
          <Route path="/customers" component={Customers} />
          <Route path="/files" component={files} />
          <Route path="/messages" component={Messages} />
          <Route path="/support" component={Support} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      
      
    </>
  );
}

export default App;
