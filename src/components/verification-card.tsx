// IMPORTS
import Lottie from 'react-lottie-player'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { useContext } from 'react'
import { UserContext } from '@/contexts/user'
import { useRouter } from 'next/router'
import Card from './card'
import RobotAnimation from '../animations/robot.json'

export default function VerificationCard() {
    const { t } = useTranslation()
    const { locker } = useContext(UserContext)
    const router = useRouter()
    // RETURNS
    return (
        <Card
            text={t('verification-text')}
            title={t('last-step')}
        >
            <Lottie
                animationData={RobotAnimation}
                play
                loop
                className="mx-auto w-2/4"
            />

            <motion.button
                onClick={() => {
                    router.push(locker)
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                    rotate: 0.1,
                    borderRadius: '50%',
                }}
                className="py-5 px-10 rounded-2xl shadow-lg bg-blue-600 text-3xl font-extrabold text-gray-100 animate__animated animate__pulse animate__infinite"
            >
                {t('verify')}
            </motion.button>
        </Card>
    )
}
