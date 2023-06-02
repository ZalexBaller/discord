// IMPORTS
import { motion } from 'framer-motion'
import { UserContext } from '@/contexts/user'
import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Card from './card'
import Image from 'next/image'

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
            logo="https://ww1.freelogovectors.net/wp-content/uploads/2023/05/tango-logo-app-freelogovectors.net_.png"
        >
            <div className="grid grid-cols-2 gap-3 mx-auto">
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(120)}
                        className={`
                            rounded-3xl p-4 w-full
                            ${quantity === 120 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        120 Coins
                    </motion.button>
                </div>
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(600)}
                        className={`
                            rounded-3xl p-4 w-full
                            ${quantity === 600 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        600 Coins
                    </motion.button>
                </div>
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(2600)}
                        className={`
                            rounded-3xl p-4 w-full min-h-full
                            ${quantity === 2600 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        2600 Coins
                    </motion.button>
                </div>
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(13500)}
                        className={`
                            rounded-3xl p-4 w-full
                            ${quantity === 13500 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        13,500 Coins
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
                className="py-5 px-10 rounded-2xl shadow-lg bg-blue-600 text-3xl font-extrabold text-gray-100 animate__animated animate__pulse animate__infinite"
            >
                {t('next')}
            </motion.button>
        </Card>
    )
}
