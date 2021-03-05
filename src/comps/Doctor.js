const Doctor = ({ doctor }) => {
  const img = require(`../images/doctors/${doctor.img}.jpg`);

  return (
    <div className="doctor">
      <div className="doctor-left">
        <img src={img.default} alt={doctor.name} />
        <p>Имя: {doctor.name}</p>
      </div>
      <div className="doctor-right">
        <p>О себе: {doctor.desc}</p>
        <p>Лайки: {doctor.likes}</p>
      </div>
    </div>
  );
};

export default Doctor;
