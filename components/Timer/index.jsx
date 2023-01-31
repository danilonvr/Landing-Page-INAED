import React, { useState, useEffect } from 'react';
import { TimerDiv } from './style';

const Timer = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(endDate) - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());
  }, [endDate]);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  return (
    <>
    <div className='flex items-center'>
        <span className='text-base md:text-2xl font-bold mr-4'>Restam apenas:</span>
        <TimerDiv>
            <span className='text-2xl font-bold mb-2'>
            {timeLeft.days}
            </span>
            <span className='text-base font-bold'>Dias</span>
        </TimerDiv>
        <TimerDiv>
            <span className='text-2xl font-bold mb-2'>
            {timeLeft.hours}
            </span>
            <span className='text-base font-bold'>Hrs</span>
        </TimerDiv>
        <TimerDiv>
            <span className='text-2xl font-bold mb-2'>
            {timeLeft.minutes}
            </span>
            <span className='text-base font-bold'>Min</span>
        </TimerDiv>
        <TimerDiv>
            <span className='text-2xl font-bold mb-2'>
            {timeLeft.seconds}
            </span>
            <span className='text-base font-bold'>Seg</span>
        </TimerDiv>
    </div>
    </>
    
  );
};

export default Timer;
