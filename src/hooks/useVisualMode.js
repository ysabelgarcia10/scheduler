import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    
    setHistory((prev) => {
      let newHistory =[];
      // WHY IS SETMODE NOT WORKING? ... :'(
      setMode(newMode); //WHY CANT IT RUN PROPERLY WITH OR WITHOUT THIS?
      
      if (replace) {
        newHistory = [...prev]
        newHistory[newHistory.length - 1] = newMode;
        return setHistory(newHistory);
      } else {
        newHistory = [...prev, newMode];
        return setHistory(newHistory);
      };
    })
  }

  function back() { 

    setHistory((prev) => {
      let newHistory = [...prev];
      
      if (history.length > 1) {
        newHistory = [...prev].slice(0, history.length - 1);
        setMode(newHistory[newHistory.length - 1]);
      };
      
      setHistory(newHistory);
    })
  }


  // const current = history[history.length - 1];
  return {mode, transition, back};
};
