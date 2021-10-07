import "./App.css";
import Footer from "./components/Footer";
import Pagecontent from "./components/Pagecontent";
import Topbar from "./components/Topbar";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import ForgotPassword from "./components/ForgotPassword";
import PageNotFound from "./components/PageNotFound";
import Charts from "./components/Charts";
import Buttons from "./components/Buttons";
import Cards from "./components/Cards";
import Colors from "./components/Colors";
import Borders from "./components/Borders";
import Animation from "./components/Animation";
import Other from "./components/Other";
import Newsidebar from "./components/Newsidebar";
import BlanlkPage from "./components/BlanlkPage";
import Tables from "./components/Tables";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <div id="wrapper">
              <Newsidebar/>
              <div id="content-wrapper" class="d-flex flex-column">
                <div id="content">
                  <Topbar />
                  <Switch>                
                  <Route path="/dashboard"> 
                  <Pagecontent />
                  </Route>
                  <Route path="/blankpage" >
                  <BlanlkPage/>
                    </Route>
                    <Route path="/notfound">
                      <PageNotFound/>
                    </Route>
                    <Route path ="/charts">
                      <Charts/>
                    </Route>
                    <Route path="/buttons">
                      <Buttons/>
                    </Route>
                    <Route path="/cards">
                      <Cards/>
                    </Route>
                    <Route path="/colors">
                      <Colors/>
                    </Route>
                    <Route path="/borders" >
                        <Borders/>
                    </Route>
                    <Route path="/animation">
                      <Animation/>
                    </Route>
                    <Route path="/others">
                      <Other/>
                    </Route>
                    
                    <Route path="/tables">
                      <Tables/>
                    </Route>
                    
                    </Switch>
                </div>
                <Footer />
              </div>
            </div>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/forgotPassword" exact>
            <ForgotPassword />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
