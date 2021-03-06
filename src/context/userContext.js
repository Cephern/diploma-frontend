import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

const UserContextProvider = (props) => {
  const [user, setUser] = useState();
  console.log(user);

  useEffect(() => {
    axios
      .get("http://localhost:5000/user", { withCredentials: true })
      .then((res) => setUser(res.data));
  }, []);

  return (
    <userContext.Provider value={user}>{props.children}</userContext.Provider>
  );
};

export default UserContextProvider;
