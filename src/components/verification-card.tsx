// IMPORTS
import Lottie from 'react-lottie-player'
import { motion } from 'framer-motion'
import Card from './card'
import RobotAnimation from '../animations/robot.json'

export default function VerificationCard() {
    // RETURNS
    return (
        <Card
            text="You need to verify that you are a human."
            title="Last Step"
        >
            <Lottie
                animationData={RobotAnimation}
                play
                loop
                className="mx-auto w-2/4"
            />

            <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                    rotate: 0.1,
                    borderRadius: '50%',
                }}
                className="py-5 px-10 rounded-2xl shadow-lg bg-blue-600 text-3xl font-extrabold text-gray-100 animate__animated animate__pulse animate__infinite"
            >
                    Verify
            </motion.button>
        </Card>
    )
}
