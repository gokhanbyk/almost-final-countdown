import React from 'react';

function TimerChallange({ title, targetTime }) {
  return (
    <section className='challenge'>
      <h2>{title}</h2>
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button>
          Start/Stop Challange
        </button>
      </p>
      {/* if timer is currently running we add active class */}
      <p className=''>
        Time is running... /
      </p>
    </section>
  );
}

export default TimerChallange;