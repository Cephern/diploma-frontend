import { useContext } from "react";
import { userContext } from "../context/userContext";

const Profile = () => {
  const user = useContext(userContext);

  return (
    <div className="">
      {user ? (
        <>
          <h2>Текущий пользователь - {user.username}</h2>
        </>
      ) : null}
    </div>
  );
};

export default Profile;
