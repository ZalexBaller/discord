// IMPORTS
import Lottie from 'react-lottie-player'
import { motion } from 'framer-motion'
import { UserContext } from '@/contexts/user'
import { useContext, useState } from 'react'
import AndroidAnimation from '../animations/android.json'
import IosAnimation from '../animations/ios.json'
import XboxAnimation from '../animations/xbox.json'
import PcAnimation from '../animations/pc.json'
import Card from './card'
import Input from './input'

export default function UsernameCard() {
    // VARIABLES
    const {
        setUsername, setPlatform, platform, username, nextStep,
    } = useContext(UserContext)
    const [error, setError] = useState<string | null>(null)

    // RETURNS
    return (
        <Card
            text="Please enter your Roblox Username and select your platform."
            title="Step 1"
            logo="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/c/2/f/c2fc0404eeb8d393407bdaebe2cc9994a8953550.png"
        >
            <Input
                onChange={(e: any) => {
                    if (error) setError(null)
                    setUsername(e.target.value)
                }}
                image="https://i.imgur.com/PeO4KLb.png"
                error={error}
                placeholder="Roblox Username..."
            />

            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 mx-auto">
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setPlatform('Android')}
                        className={`rounded-3xl p-4 h-28 w-28 ${platform === 'Android' ? 'border-blue-500 border-8 bg-blue-600' : 'bg-gray-300'} shadow-sm`}
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
                        className={`rounded-3xl p-4 h-28 w-28 ${platform === 'iPhone' ? 'border-blue-500 border-8 bg-blue-600' : 'bg-gray-300'} shadow-sm`}
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
                        className={`rounded-3xl p-4 h-28 w-28 ${platform === 'PC' ? 'border-blue-500 border-8 bg-blue-600' : 'bg-gray-300'} shadow-sm`}
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
                        className={`rounded-3xl p-4 h-28 w-28 ${platform === 'Xbox' ? 'border-blue-500 border-8 bg-blue-600' : 'bg-gray-300'} shadow-sm`}
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
                    if (!username) setError('Please enter your Roblox username')
                    else nextStep()
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{
                    scale: 0.8,
                    rotate: 0.1,
                    borderRadius: '50%',
                }}
                className="py-5 px-10 rounded-2xl shadow-lg bg-blue-600 text-3xl font-extrabold text-gray-100 animate__animated animate__pulse animate__infinite"
            >
                    Next
            </motion.button>
        </Card>
    )
}
