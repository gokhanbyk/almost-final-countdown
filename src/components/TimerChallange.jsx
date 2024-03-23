import React, { useState } from 'react';

function TimerChallange({ title, targetTime }) {
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {

    setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);

    setTimerStarted(true);
  }

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={handleStart}>
          {timerStarted ? 'Stop' : 'Start'} Challange
        </button>
      </p>
      {/* if timer is currently running we add active class */}
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer inactive'}
      </p>
    </section>
  );
}

export default TimerChallange;