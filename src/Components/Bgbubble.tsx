import React from 'react';

type Props = Record<string, never>;

const Bgbubble: React.FC<Props> = () => {
  return (
    <div className="relative w-full h-full ">
      <div className="absolute top-10 -z-2 left-10 md:left-10 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-80 blur-[70px]"></div>
      <div className="absolute top-40 h-20 w-20 md:top-48 -z-2 left-0 md:left-80 transform  md:w-[300px] md:h-[300px] rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-80 blur-[70px]"></div>
      <div className="absolute top-60 md:top-80 right-0 transform  w-[270px] h-[270px] blur-[70px] rounded-full bg-gradient-to-br from-pink-300 to-red-300 opacity-80 "></div>
    </div>
  );
};

export default Bgbubble;
