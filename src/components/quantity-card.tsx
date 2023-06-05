// IMPORTS
import { motion } from 'framer-motion'
import { UserContext } from '@/contexts/user'
import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Card from './card'
import Image from 'next/image'
import NitroBasicSVG from '@/assets/nitro_basic'
import NitroSVG from '@/assets/nitro'
import NitroAnimation from '@/animations/nitro.json';

export default function QuantityCard() {
    // VARIABLES
    const { t } = useTranslation()
    const {
        quantity, setQuantity, nextStep,
    } = useContext(UserContext)
    const [error, setError] = useState<string | null>(null)

    // RETURNS
    return (
        <Card
            text={t('quantity-text')}
            title={t('step-2')}
            animation={NitroAnimation}
        >
            <div className="grid grid-cols-2 gap-3 mx-auto">
                <div className="col-span-1 h-full">
                    <motion.button
                        onClick={() => setQuantity('NITRO BASIC')}
                        className={`
                            rounded-3xl p-4 w-full h-full
                            ${quantity === 'NITRO BASIC' ? 'border-2' : 'border-0 opacity-70'} 
                            bg-gradient-to-r from-indigo-400 to-sky-500 text-gray-100
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto border-bg-gray-300
                        `}
                        whileTap={{
                            scale: 0.8,
                        }}
                    >
                        <div className='container mx-auto space-y-2'>
                            <center><NitroBasicSVG /></center>
                            <h2>$ 0.00</h2>
                        </div>
                    </motion.button>
                </div>
                <div className="col-span-1 h-full">
                    <motion.button
                        onClick={() => setQuantity('NITRO PLUS')}
                        className={`
                            rounded-3xl p-4 w-full h-full
                            ${quantity === 'NITRO PLUS' ? 'border-2' : 'border-0 opacity-70'} 
                            bg-gradient-to-r from-purple-400 to-pink-500 text-gray-100
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto border-bg-gray-300
                        `}
                        whileTap={{
                            scale: 0.8,
                        }}
                    >
                        <div className='container mx-auto space-y-2'>
                            <center><NitroSVG /></center>
                            <h2>$ 0.00</h2>
                        </div>
                    </motion.button>
                </div>
            </div>

            <motion.button
                onClick={() => {
                    nextStep()
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
    )
}
