import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookalModal from '../BookingModal/BookalModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({selectedDate}) => {

    const [appointmentOptions, setAppointmentOptions] = useState([]);
    const [treatment, setTreatment] = useState(null);


    useEffect( () =>{
        fetch('AppointmentOptions.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    }, [])

    return (
        <section className='my-16 mx-20'>
            <p className='text-center text-secondary font-bold'>Available Appointments on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 my-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                          key={option._id}
                          appointmentOption={option}
                          setTreatment={setTreatment}
                    ></AppointmentOption>)
                }
            </div>
           { 
            treatment &&
            <BookalModal
                 selectedDate={selectedDate}
                 treatment={treatment}
                 setTreatment={setTreatment}
            ></BookalModal>
            }
        </section>
    );
};

export default AvailableAppointment;