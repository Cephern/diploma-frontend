import Login from "./comps/Login";
import Profile from "./comps/Profile";
import Register from "./comps/Register";
import Doctors from "./comps/Doctors";
import UserContextProvider from "./context/userContext";
import DoctorsContextProvider from "./context/doctorsContext";
import "./index.css";
import Home from "./comps/Home";
import About from "./comps/About";
import ReviewsContextProvider from "./context/reviewsContext";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Login />
        <Register />
        <Profile />

        <DoctorsContextProvider>
          <Home />
          <Doctors />
          <ReviewsContextProvider>
            <About />
          </ReviewsContextProvider>
        </DoctorsContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
