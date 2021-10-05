import { useState } from "react";

export function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    const newHistory = history.slice(0, history.length-1);
    setMode(newMode);
    
    if (replace) {
      setHistory([...newHistory, newMode]);
    } else {
      setHistory([...history, newMode])
    };

    console.log("Transition", history);
    // setHistory((prev) => {
    //   let newHistory =[];
    //   // WHY IS SETMODE NOT WORKING? ... :'(
    //   setMode(newMode); //WHY CANT IT RUN PROPERLY WITH OR WITHOUT THIS?
    //   console.log("history", history)
    //   console.log("mode", mode, "newMode", newMode)
      
    //   if (replace) {
    //     newHistory = [...prev]
    //     newHistory[newHistory.length - 1] = newMode;
    //     setHistory(newHistory);
    //   } else {
    //     newHistory = [...prev, newMode];
    //     setHistory(newHistory);
    //   };
    // })
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
    console.log("BACK", history)
  }


  // const current = history[history.length - 1];
  return {mode, transition, back};
};
