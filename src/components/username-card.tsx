// IMPORTS
import Lottie from 'react-lottie-player';
import { motion } from 'framer-motion';
import { UserContext } from '@/contexts/user';
import { useContext, useState } from 'react';
import { useTranslation } from 'react-i18next';
import AndroidAnimation from '../animations/android.json';
import IosAnimation from '../animations/ios.json';
import XboxAnimation from '../animations/xbox.json';
import PcAnimation from '../animations/pc.json';
import Card from './card';
import Input from './input';
import NitroAnimation from '@/animations/nitro.json';

export default function UsernameCard() {
  // VARIABLES
  const { t } = useTranslation();
  const { setUsername, setPlatform, platform, username, nextStep } =
    useContext(UserContext);
  const [error, setError] = useState<string | null>(null);

  // RETURNS
  return (
    <Card
      text={t('enter-username')}
      title={t('step-1')}
      animation={NitroAnimation}
    >
      <Input
        onChange={(e: any) => {
          if (error) setError(null);
          setUsername(e.target.value);
        }}
        image="https://i.imgur.com/PeO4KLb.png"
        error={error}
        placeholder={t('placeholder')}
      />

      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mx-auto">
        <div className="col-span-1">
          <motion.button
            onClick={() => setPlatform('Android')}
            className={`rounded-3xl p-4 h-28 w-28 ${
              platform === 'Android'
                ? 'border-indigo-500 border-8 bg-indigo-600'
                : 'bg-gray-200'
            } shadow-lg`}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: '100%',
            }}
          >
            <Lottie
              animationData={AndroidAnimation}
              play
              loop
              className="mx-auto w-full"
            />
          </motion.button>
        </div>
        <div className="col-span-1">
          <motion.button
            onClick={() => setPlatform('iPhone')}
            className={`rounded-3xl p-4 h-28 w-28 ${
              platform === 'iPhone'
                ? 'border-indigo-500 border-8 bg-indigo-600'
                : 'bg-gray-200'
            } shadow-lg`}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: '100%',
            }}
          >
            <Lottie
              animationData={IosAnimation}
              play
              loop
              className="mx-auto w-full"
            />
          </motion.button>
        </div>
        <div className="col-span-1">
          <motion.button
            onClick={() => setPlatform('PC')}
            className={`rounded-3xl p-4 h-28 w-28 ${
              platform === 'PC'
                ? 'border-indigo-500 border-8 bg-indigo-600'
                : 'bg-gray-200'
            } shadow-lg`}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: '100%',
            }}
          >
            <Lottie
              animationData={PcAnimation}
              play
              loop
              className="mx-auto w-full"
            />
          </motion.button>
        </div>
        <div className="col-span-1">
          <motion.button
            onClick={() => setPlatform('Xbox')}
            className={`rounded-3xl p-4 h-28 w-28 ${
              platform === 'Xbox'
                ? 'border-indigo-500 border-8 bg-indigo-600'
                : 'bg-gray-200'
            } shadow-lg`}
            whileTap={{
              scale: 0.8,
              rotate: -360,
              borderRadius: '100%',
            }}
          >
            <Lottie
              animationData={XboxAnimation}
              play
              loop
              className="mx-auto w-full"
            />
          </motion.button>
        </div>
      </div>

      <motion.button
        onClick={() => {
          if (!username) setError(t('error'));
          else nextStep();
        }}
        whileHover={{ scale: 1.2 }}
        whileTap={{
          scale: 0.8,
          rotate: 0.1,
          borderRadius: '50%',
        }}
        className="py-5 px-10 rounded-2xl shadow-lg bg-indigo-600 text-3xl font-extrabold text-gray-100 animate__animated animate__pulse animate__infinite"
      >
        {t('next')}
      </motion.button>
    </Card>
  );
}
