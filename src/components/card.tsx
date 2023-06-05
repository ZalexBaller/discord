// IMPORT
import { ReactNode } from 'react';
import Image from 'next/image';
import Lottie from 'react-lottie-player';

export default function CardComponent({
  children,
  title,
  logo,
  text,
  animation,
}: {
  children: ReactNode;
  title: string | null;
  logo?: string | null;
  text?: string | null;
  animation?: any | null;
}) {
  return (
    <div className="w-full border-8 border-indigo-400 rounded-3xl shadow-2xl bg-gray-700 h-fit bg-opacity-70 backdrop-blur-lg text-gray-50 border-opacity-80 z-50 animate__animated animate__bounceIn py-8 lg:py-12 space-y-6 px-6 lg:px-16 mx-auto text-center">
      <h2 className="absolute top-0 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-indigo-600 border-indigo-400 text-gray-50 border-8 items-center py-2 lg:py-4 px-3 lg:px-8 text-xl w-4/6 lg:text-4xl font-extrabold rounded-2xl">
        {title}
      </h2>
      {animation && (
        <Lottie
          animationData={animation}
          play
          loop
          className="mx-auto w-4/6"
        />
      )}
      {logo && (
        <Image
          alt="icon"
          width={70}
          height={70}
          className="mx-auto"
          src={logo}
        />
      )}
      {text && (
        <h1 className="text-2xl lg:text-3xl font-light lg:font-extralight">
          {text}
        </h1>
      )}
      {children}
    </div>
  );
}
