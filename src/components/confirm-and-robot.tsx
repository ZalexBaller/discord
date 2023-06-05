// IMPORTS
import Lottie from 'react-lottie-player';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useContext, useEffect } from 'react';
import { UserContext } from '@/contexts/user';
import { useRouter } from 'next/router';
import Card from './card';
import RobotAnimation from '../animations/robot.json';
import NitroAnimation from '../animations/d-nitrp.json';
import NitroSVG from '@/assets/nitro';

export default function VerificationCard() {
  const { t } = useTranslation();
  const { locker } = useContext(UserContext);
  const router = useRouter();
  useEffect(() => {
    //if (locker) setTimeout(() => router.push(locker), 2000);
  }, [locker]);
  // RETURNS
  return (
    <Card title={t('last-step')}>
      <Lottie
        animationData={NitroAnimation}
        play
        loop
        className="mx-auto w-2/4"
      />

      <h2 className="text-center text-indigo-300 text-xl font-medium flex gap-2 items-center justify-center"><NitroSVG /> {t('activated')} ✅</h2>

      <p className="text-center text-gray-200 text-xl font-medium">
        {t('verification-text')} 
        <Lottie
          animationData={RobotAnimation}
          play
          loop
          className="mx-auto w-20"
        />
      </p>

      <motion.button
        onClick={() => {
          router.push(locker);
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
          rotate: 0.1,
          borderRadius: '50%',
        }}
        className="py-5 px-10 rounded-2xl shadow-lg bg-indigo-600 text-3xl font-extrabold text-gray-100 animate__animated animate__pulse animate__infinite"
      >
        {t('verify')}
      </motion.button>
    </Card>
  );
}
