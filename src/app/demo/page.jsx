'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

export default function ChickenRoadGame() {
  const [step, setStep] = useState(0);
  const [multiplier, setMultiplier] = useState(1.0);
  const [isCrashed, setIsCrashed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [balance, setBalance] = useState(1000);
  const [betAmount, setBetAmount] = useState(100);

  const multipliers = [0.00, 1.28, 1.36, 1.44, 1.53, 1.63, 1.75, 2.00, 2.28, 2.36, 2.44, 2.53, 2.63, 2.75, 3.00];

  const swiperRef = useRef(null);

  const startGame = () => {
    if (betAmount > balance || betAmount <= 0) {
      alert('Invalid Bet Amount!');
      return;
    }
    setIsPlaying(true);
    setIsCrashed(false);
    setStep(0);
    setMultiplier(1.0);
    setBalance(balance - betAmount);
  };

  const moveChicken = () => {
    if (!isPlaying) return;

    const crashChance = Math.random();
    if (crashChance < 0.05) {
      setIsCrashed(true);
      setIsPlaying(false);
      return;
    }

    const nextStep = step + 1;
    setStep(nextStep);

    if (nextStep < multipliers.length) {
      setMultiplier(multipliers[nextStep]);
    } else {
      setMultiplier(multipliers[multipliers.length - 1]);
    }
  };

  const cashOut = () => {
    if (!isPlaying) return;
    const winAmount = betAmount * multiplier;
    setBalance(balance + winAmount);
    setIsPlaying(false);
    alert(`You cashed out: $${winAmount.toFixed(2)}!`);
  };

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideTo(step);
    }
  }, [step]);

  return (
    <div className='md:p-10'>
      <div className="flex flex-col md:border-2 border-dashed items-center justify-center min-h-screen bg-[#343b4e] text-white p-4">
        <div className='flex items-center justify-between w-full mb-6'>
          <h1 className="md:text-2xl font-bold ">Chicken Road</h1>
          {/* Balance */}
          <p className="mt-2 md:text-2xl text-yellow-300">
             <span className="font-bold">${balance.toFixed(2)}</span>
          </p>
        </div>

        {/* Chicken Track with Swiper */}
        <div className="relative w-full mb-4 md:mb-10 bg-[#394165] shadow-xl p-4">
          <Swiper
            ref={swiperRef}
            slidesPerView={3}
            spaceBetween={20}

            modules={[Navigation]}
            navigation={false}
            className="w-full"
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 8 },
              1400: { slidesPerView: 12 }
            }}
          >
            {multipliers.map((multi, index) => (
              <SwiperSlide key={index}>
                <div className="relative flex flex-col items-center justify-end  h-60 bg-[#394165] border-r-2 border-dashed border-white  p-2">
                  <div className="mb-2 font-bold text-base sm:text-sm md:text-lg absolute top-2  bg-green-500 rounded-full px-2 py-1 z-50">
                    {multi}x
                  </div>
                  {step === index && !isCrashed && (
                    <Image src="/chicken.webp" alt="Chicken" width={100} height={30} className="z-40" />
                  )}
                  <Image src="/k.png" alt="K" width={80} height={40} className="absolute bottom-0" />
                  {step === index && isCrashed && (
                    <div className="text-red-500 font-bold absolute bottom-0 left-0 right-0 flex justify-center">

                      <Image src="/k2.png" alt="Crash" width={120} height={50} className="z-50 absolute bottom-0 left-0" />
                      <Image src="/k3.png" alt="Crash" width={120} height={50} className="z-40 absolute bottom-0 left-0" />

                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Bet Controls */}
        <div className="grid grid-cols-2 gap-4 md:p-4 bg-[#394165] shadow-xl items-center w-full space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <div className='flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-2'>
            <input
              type="number"
              className="border p-2 rounded w-32 text-black sm:mt-3 md:mt-0 "
              placeholder="Bet Amount"
              value={betAmount}
              onChange={(e) => setBetAmount(Number(e.target.value))}
              disabled={isPlaying}
            />
            <button
              onClick={startGame}
              className="bg-green-500 hover:bg-green-600 text-black  font-bold px-8 py-3 rounded text-lg w-full sm:w-auto"
              disabled={isPlaying}
            >
              Start
            </button>
          </div>
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-end space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={moveChicken}
              className={isPlaying ? "bg-green-500 hover:bg-green-600 text-black  font-bold px-8 py-3 rounded text-lg w-full sm:w-auto" :
                "bg-gray-400 text-black  font-bold px-8 py-3 rounded text-lg w-full sm:w-auto"
              }
              disabled={!isPlaying}
            >
              GO
            </button>
            <button
              onClick={cashOut}
              className={isPlaying ? "bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded text-lg w-full sm:w-auto" :
                "bg-gray-400 text-black font-bold px-8 py-3 rounded text-lg w-full sm:w-auto"
              }
              disabled={!isPlaying}
            >
              CASH OUT
            </button>
          </div>
        </div>

        {isCrashed && (
          <div className="text-red-600 text-xl mt-4 font-bold">Crashed! 😭</div>
        )}
      </div>
    </div>
  );
}
