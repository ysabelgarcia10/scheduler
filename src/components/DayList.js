import React from "react";

// import "components/DayList.scss";
import DayListItem from "components/DayListItem";
import { action } from "@storybook/addon-actions";

// const classNames = require('classnames');

function DayList(props) {

  const days = props.days.map(day => {
    return (
      <DayListItem 
        key={day.id}
        name={day.name}
        spots={day.spots} 
        selected={day.name === props.day}
        setDay={props.setDay}  
      />
    )
  })
  

  return (
    <ul>
      {days}
    </ul>
  );
}

export default DayList;