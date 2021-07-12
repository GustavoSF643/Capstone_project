import { Route, Switch } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import SignUp from "../pages/SignUp";
import PetInfo from "../pages/PetInfo";
import PetRegister from "../pages/PetRegister";
import User from "../pages/User";
import Contact from "../pages/Contact";
import Rating from "../pages/Rating";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/dashboard/:petId">
          <PetInfo />
        </Route>
        <Route path="/petregister">
          <PetRegister />
        </Route>
        <Route path="/user">
          <User />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/rating">
          <Rating />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
