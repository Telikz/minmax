import { useState, useEffect } from 'react';
import Layout, { siteTitle } from '/components/layout';

export default function Meditation() {
  const [time, setTime] = useState(5);
  const [countdown, setCountdown] = useState(time * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    setSound(new Audio('/bell.mp3'));
  }, []);

  useEffect(() => {
    if (countdown === 0 && timerActive) {
      setTimerActive(false);
      sound.play();
    }
  }, [countdown]);

  useEffect(() => {
    setCountdown(time * 60);
  }, [time]);

  const startTimer = () => {
    setTimerActive(true);
  };

  const stopTimer = () => {
    setTimerActive(false);
  };

  useEffect(() => {
    let timer;
    if (timerActive) {
      timer = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [timerActive]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center text-center p-50">
        <p className="text-5xl font-semibold py-4 text-primary">Meditation Timer</p>
        <div className="rounded-md w-1/2 items-center">
          <div className="text-center items-center mb-4 py-1">
            <span className=" text-9xl font-semibold items-center text-primary-content">
              {Math.floor(countdown / 60)}:{('0' + (countdown % 60)).slice(-2)}
            </span>
          </div>
          <div className="mb-4">
            <input
              id="time"
              type="range"
              min="1"
              max="120"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-primary"
              disabled={timerActive}
            />
          </div>

          <div className="flex justify-center">
            {!timerActive ? (
              <button
                onClick={startTimer}
                className="bg-primary hover:bg-primary-focus text-primary-content px-4 py-2 rounded-md"
              >
                Start
              </button>
            ) : (
              <button
                onClick={stopTimer}
                className="bg-secondary hover:bg-secondary-focus text-secondary-content px-4 py-2 rounded-md"
              >
                Stop
              </button>
            )}
          </div>

        </div>
      </div></Layout>
  );
}
