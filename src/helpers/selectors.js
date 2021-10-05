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

export function getInterviewersForDay(state, day) {
  const filteredDay = state.days.filter(aDay => aDay.name === day);
  
  if (state.days.length === 0 || filteredDay.length === 0) {
    return [];
  };
  
  const filteredInterviewers = filteredDay[0].interviewers;
  const interviewers = filteredInterviewers.map(interviewer => state.interviewers[interviewer]);
  return interviewers;
};