import { useContext } from "react";
import { doctorsContext } from "../context/doctorsContext";
import Doctor from "./Doctor";

const Doctors = () => {
  const doctors = useContext(doctorsContext);

  return (
    <div id="doctors">
      <h2 className="title">Наши Врачи</h2>

      <div className="doctors">
        {doctors ? (
          doctors.map((doctor) => <Doctor doctor={doctor} key={doctor._id} />)
        ) : (
          <div className="loading">Ищем наших Врачей...</div>
        )}
      </div>
    </div>
  );
};

export default Doctors;
