import { useContext, useEffect, useState } from "react";
import { userContext } from "../context/userContext";
import axios from "axios";

const Profile = () => {
  const user = useContext(userContext);
  const [forms, setForms] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/form", { withCredentials: true })
      .then((res) => setForms(res.data));
  }, []);

  const logout = () => {
    axios
      .get("http://localhost:5000/logout", { withCredentials: true })
      .then((res) => {
        if (res.data === "success") {
          window.location.href = "/";
        }
      });
  };

  console.log(forms);

  return (
    <div id="profile">
      <div className="nav-right">
        <span onClick={logout}>Выйти</span>
      </div>
      <h2>Добро пожаловать, {user.fio}</h2>
      <h3>Отправленные формы</h3>
      {forms ? (
        forms.map((form) => {
          return (
            <div className="profile-form" key={form._id}>
              <p>Пациент - {form.fio}</p>
              <p>Диагноз - {form.diagnosis}</p>
            </div>
          );
        })
      ) : (
        <div className="">Загружаем обращения...</div>
      )}
    </div>
  );
};

export default Profile;
