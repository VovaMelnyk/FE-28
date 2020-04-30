import React, { Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
// import Home from "./Containers/Home/Home";
// import About from "./Containers/About/About";
// import Profile from "./Containers/Profile/Profile";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

const Home = lazy(() => import("./Containers/Home/Home"));
const About = lazy(() => import("./Containers/About/About"));
const Profile = lazy(() => import("./Containers/Profile/Profile"));

function App() {
  // const isAuth = true;
  // if (isAuth) {
  //   return (
  //     <>
  //       <Navbar />
  //       <div className="container pt-4">
  //         <Switch>
  //           <Route exact path="/" component={Home} />
  //           {/* <Route path="/about" component={About} /> */}
  //           <Route
  //             path="/about"
  //             render={(props) => <About {...props} title="Github search" />}
  //           />
  //           <Route path="/profile/:login" component={Profile} />
  //           <Redirect to="/" />
  //         </Switch>
  //       </div>
  //     </>
  //   );
  // }
  return (
    <>
      <Navbar />
      <div className="container pt-4">
        <Suspense fallback={<p>Loading</p>}>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/about" component={About} /> */}
            <Route
              path="/about"
              render={(props) => <About {...props} title="Github search" />}
            />
            <PrivateRoute path="/profile/:login" component={Profile} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </div>
    </>
  );
}

export default App;
