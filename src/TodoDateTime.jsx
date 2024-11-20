import { useEffect, useState } from "react";

export const TodoDateTime = () => {
  const [dateTime, setDateTime] = useState();
  const gettimedate = () => {
    const date = new Date();
    const formdate = date.toLocaleDateString();
    const formtime = date.toLocaleTimeString();

    setDateTime(`${formdate} - ${formtime}`);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      gettimedate();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return <h2>{dateTime}</h2>;
};
