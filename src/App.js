import "./output.css";
import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if(running){
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if(!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="box w-screen h-screen" >
      <div className=" absolute inset-x-0 top-50 bg-white flex col display: inline-block mx-auto justify-center max-w-sm  gap-x-4 rounded-xl p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <h1 className="flex items-center justify-center w-full gap-6 text-2xl font-semibold text-gray-900 mt-1 text-center w-full">Stopwatch</h1>
      <div className="flex items-center justify-center w-full gap-6 pt-4">
        <div><h3 className="stopwatch-element minutes font-manrope font-semibold text-2xl text-indigo-600 tracking-[15.36px] max-w-[44px] text-center relative z-20">
          {("0" + Math.floor((time / 60000) % 60)).slice(-2)}: </h3></div>
        <span><h3 className="stopwatch-element seconds font-manrope font-semibold text-2xl text-indigo-600 tracking-[15.36px] max-w-[44px] text-center relative z-20">
          {("0" + Math.floor((time / 1000) % 60)).slice(-2)}: </h3></span>
        <span><h3 className="stopwatch-element milliseconds font-manrope font-semibold text-2xl text-indigo-600 tracking-[15.36px] max-w-[44px] text-center relative z-20">
          {("0" + ((time / 10) % 100)).slice(-2)}</h3></span>
      </div>
      <div className="flex items-center justify-center w-full gap-6 pt-4">
        {running ? (
          <button className=" w-xs relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" 
          onClick={() => {setRunning(false)}}>Stop</button>
          ):
          (<button className=" w-xs relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800" 
            onClick={() => {setRunning(true)}}>Start</button>
          )
        }
        <button className=" w-xs relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
        onClick={() => {setTime(0)}}>Reset</button>
      </div>
      </div>
    </div>
  );
}

export default App;
