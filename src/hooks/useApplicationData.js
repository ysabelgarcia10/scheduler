import { useState, useEffect } from "react";
import axios from "axios";

function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {}, 
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });
  const updatedDays = (dayObject, daysArray) => {
    return daysArray.map((day) => (day.name === dayObject.name ? dayObject : day))
  };

  //fetching within useEffect
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ]).then((all) => {
      setState(prev => ({ ...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data}))
    });
  }, [])

  //update the number of spots upon booking/cancelling interviews
  function updateSpots(dayToChange, days, appointments) {
    //look into specific day first, find all the appointments
    const updateDaySpots = days.find((day) => day.name === dayToChange);
    let spotCount = 0;
    for (let appt in appointments) {
      if (
        appointments[appt].interview === null &&
        updateDaySpots.appointments.includes(appointments[appt].id)
      ) {
        spotCount++;
      }
    }
    return { ...updateDaySpots, spots: spotCount };
  };

  //adding an appointment
  function bookInterview(id, interview) {
    
    console.log("inside bookInterview fn in applicaton", id, interview);

    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    const days = updatedDays(updateSpots(state.day, state.days, appointments), state.days)

    return axios.put(`/api/appointments/${id}`, appointment)
    .then(() => {
      setState({
        ...state,
        appointments,
        days
      });
    })
  };

  //deleting an appointment
  function cancelInterview(id, interview) {
    console.log("DELETING", id, interview)

    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const days = updatedDays(updateSpots(state.day, state.days, appointments), state.days)

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({
        ...state,
        appointments,
        days
      });
    });
  }

  return {state, setDay, bookInterview, cancelInterview}
}

export default useApplicationData;