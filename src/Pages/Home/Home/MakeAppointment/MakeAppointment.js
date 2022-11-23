import React from "react";
import doctor from '../../../../assets/images/doctor.png'
import appointment from '../../../../assets/images/appointment.png'
import PrimaryButton from "../../../../Components/PrimaryButton/PrimaryButton";

const MakeAppointment = () => {
  return (
    <section className="mt-32"
    style={{
        background:`url(${appointment})`
    }}
    
    >
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={doctor}
            className=" -mt-32 hidden md:block  lg:w-1/2 rounded-lg shadow-2xl"
            alt =''/>
          <div>
            <h4 className="text-lg text-primary font-bold">Appointment</h4>
            <h1 className="text-white text-4xl font-bold">Make An Appointment Today</h1>
            <p className="text-white py-6">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique eius, error libero nam quia, debitis at perspiciatis itaque expedita, a iusto quam. Illum, libero totam aliquam perferendis ducimus, quibusdam aliquid odio natus exercitationem incidunt necessitatibus optio fuga iusto corrupti. Alias, laudantium nostrum nobis incidunt error ut consectetur deleniti tenetur placeat.

            </p>
            <PrimaryButton>Appointment</PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakeAppointment;
