import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import NotFound from "./components/NotFound/NotFound";
import Auth from "./components/Auth/Auth";
import ProfileDetails from "./components/Profile/profile";
import MyProjects from "./components/Projects/myProjects";
import ForgotPassword from "./components/Auth/forgotPassword/forgotPassword";
import ContactForm from "./components/Contact/Contact";
import ResetPassword from "./components/Auth/NewPassword";
import SearchPage from "./components/Search/SearchPage";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import ProjectForm from "./components/Forms/ProjectForm/ProjectForm";

const App = () => {
  const [currentId, setCurrentId] = useState(null);

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route
            exact
            path="/"
            component={(props) => (
              <Home currentId={currentId} setCurrentId={setCurrentId} />
            )}
          />

          <Route exact path="/projects/:id" component={ProjectDetails} />
          <Route
            exact
            path="/project/createProject"
            component={(props) => (
              <ProjectForm currentId={currentId} setCurrentId={setCurrentId} />
            )}
          />

          <Route exact path="/user/:id" component={ProfileDetails} />

          <Route
            exact
            path="/myProjects"
            component={(props) => <MyProjects currentId={currentId} />}
          />
          <Route exact path="/forgotPassword" component={ForgotPassword} />
          <Route exact path="/resetPassword/:resetPasswordToken">
            <ResetPassword />
          </Route>
          <Route exact path="/contact">
            <ContactForm></ContactForm>
          </Route>
          <Route exact path="/searchPage" component={SearchPage}>
            <SearchPage
              currentId={currentId}
              setCurrentId={setCurrentId}
            ></SearchPage>
          </Route>

          <Route exact path="/auth" component={Auth} />
          <Route exact component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
