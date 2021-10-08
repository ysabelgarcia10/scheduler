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
