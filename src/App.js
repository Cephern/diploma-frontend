import Login from "./comps/Login";
import Profile from "./comps/Profile";
import Register from "./comps/Register";
import Doctors from "./comps/Doctors";
import DoctorsContextProvider from "./context/doctorsContext";
import "./index.css";
import Home from "./comps/Home";
import About from "./comps/About";
import ReviewsContextProvider from "./context/reviewsContext";
import { userContext } from "./context/userContext";
import { useContext } from "react";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./comps/Nav";

function App() {
  const user = useContext(userContext);
  console.log(user);

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          {user ? (
            <>
              <DoctorsContextProvider>
                <Nav />
                <Route exact path="/" component={Home} />
                <Route path="/doctors">
                  <Doctors />
                </Route>
                <Route path="/about">
                  <ReviewsContextProvider>
                    <About />
                  </ReviewsContextProvider>
                </Route>
              </DoctorsContextProvider>
              <Route path="/profile">
                <Profile />
              </Route>
            </>
          ) : (
            <>
              <Route exact path="/">
                <Login />
              </Route>

              <Route path="/register">
                <Register />
              </Route>
            </>
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
