import { useState, useEffect } from 'react';
import Layout, { siteTitle } from '/components/layout';

export default function Meditation() {
  const [time, setTime] = useState(5);
  const [interval, setInterval] = useState(5);
  const [countdown, setCountdown] = useState(time * 60);
  const [timerActive, setTimerActive] = useState(false);
  const [sound, setSound] = useState(null);
  const [intervalSound, setIntervalSound] = useState(false);

  useEffect(() => {
    setSound(new Audio('/bell.mp3'));
  }, []);

  useEffect(() => {
    if (countdown === 0 && timerActive) {
      setTimerActive(false);
      sound.play();
    } else if (intervalSound && countdown % (interval * 60) === 0) {
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
        <h1 className="text-5xl font-semibold py-4 text-primary">Meditation Timer</h1>
        <div className="rounded-md w-1/2 items-center">
          <div className="text-center items-center mb-4 py-1">
            <span className=" text-9xl font-semibold items-center text-primary-content">
              {Math.floor(countdown / 60)}:{('0' + (countdown % 60)).slice(-2)}
            </span>
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="text-xl text-primary">Meditation Duration (minutes):</label>
            <div className="flex">
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
              <input
                type="number"
                min="1"
                max="120"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="ml-2 w-16"
                disabled={timerActive}
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="interval" className="text-xl text-primary">Interval Sound (minutes):</label>
            <div className="flex">
              <input
                id="interval"
                type="range"
                min="1"
                max={time}
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                className="w-full bg-primary"
                disabled={!intervalSound || timerActive}
              />
              <input
                type="number"
                min="1"
                max={time}
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                className="ml-2 w-16"
                disabled={!intervalSound || timerActive}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" checked={intervalSound} onChange={(e) => setIntervalSound(e.target.checked)} />
              <span className="ml-2 text-primary">Enable Interval Sound</span>
            </label>
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
      </div>
    </Layout>
  );
}
