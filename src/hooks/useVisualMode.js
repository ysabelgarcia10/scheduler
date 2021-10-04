import { useState } from "react";

function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(newMode, replace = false) {
    setMode(newMode);

    if (replace) {
      const replaceHistory = [...history];
      replaceHistory[replaceHistory.length - 1] = mode;
      setHistory(replaceHistory);
    } else {
      const newHistory = [...history];
      newHistory.push(newMode);
      setHistory(newHistory);
    }
  }

  function back() { 
    const newHistory = [...history];
    newHistory.pop(mode);

    if (history.length > 1)
    setMode(newHistory[newHistory.length - 1])
   }

  return {mode, transition, back}

};

export default useVisualMode;