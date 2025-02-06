import React from 'react';

interface TitleProps {
  children: string; 
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className='text-center text-xl md:text-3xl font-bold text-blue-950 m-2 md:m-5'>{children}</h1>;
};

export default Title;