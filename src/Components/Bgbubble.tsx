import React from 'react';

type Props = {};

const Bgbubble: React.FC<Props> = () => {
  return (
    <div className="relative w-full h-full ">
      <div className="absolute top-10 left-10 w-[200px] h-[200px] rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-80 blur-[50px]"></div>
      <div className="absolute top-80 left-80 transform  w-[300px] h-[300px] rounded-full bg-gradient-to-br from-pink-500 to-red-500 opacity-80 blur-[50px]"></div>
      <div className="absolute top-80 right-0 transform  w-[270px] h-[270px] blur-[30px] rounded-full bg-gradient-to-br from-pink-300 to-red-300 opacity-80"></div>
    </div>
  );
};

export default Bgbubble;
