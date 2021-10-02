const state = {
  days: [
    {
      id: 1,
      name: "Monday",
      appointments: [1, 2, 3]
    },
    {
      id: 2,
      name: "Tuesday",
      appointments: [4, 5]
    }
  ],
  appointments: {
    "1": { id: 1, time: "12pm", interview: null },
    "2": { id: 2, time: "1pm", interview: null },
    "3": {
      id: 3,
      time: "2pm",
      interview: { student: "Archie Cohen", interviewer: 2 }
    },
    "4": { id: 4, time: "3pm", interview: null },
    "5": {
      id: 5,
      time: "4pm",
      interview: { student: "Chad Takahashi", interviewer: 2 }
    }
  },
  interviewers: {
    "1": {  
      "id": 1,
      "name": "Sylvia Palmer",
      "avatar": "https://i.imgur.com/LpaY82x.png"
    },
    "2": {
      id: 2,
      name: "Tori Malcolm",
      avatar: "https://i.imgur.com/Nmx0Qxo.png"
    }
  }
};

export function getAppointmentsForDay(state, day) {
  const filteredDay = state.days.filter(aDay => aDay.name === day);
  
  if (state.days.length === 0 || filteredDay.length === 0) {
    return [];
  };
  
  const filteredAppointments = filteredDay[0].appointments;
  const appointments = filteredAppointments.map(appt => state.appointments[appt]);
  return appointments;
};


export function getInterview(state, interview) {
 if (!interview) {
    return null;
  }

  const interviewerNum = interview.interviewer;
  const interviewerDetails = {...interview, interviewer: state.interviewers[interviewerNum]}
  return interviewerDetails
};