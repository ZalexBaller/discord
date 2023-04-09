// IMPORTS
import { motion } from 'framer-motion'
import { UserContext } from '@/contexts/user'
import { useContext, useState } from 'react'
import Card from './card'

export default function QuantityCard() {
    // VARIABLES
    const {
        quantity, setQuantity, nextStep,
    } = useContext(UserContext)
    const [error, setError] = useState<string | null>(null)

    // RETURNS
    return (
        <Card
            text="Please select the amount of Robux."
            title="Step 2"
            logo="https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/4X/c/2/f/c2fc0404eeb8d393407bdaebe2cc9994a8953550.png"
        >
            <div className="grid grid-cols-2 gap-3 mx-auto">
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(500)}
                        className={`
                            rounded-3xl p-4 
                            ${quantity === 500 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        500 ROBUX
                    </motion.button>
                </div>
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(800)}
                        className={`
                            rounded-3xl p-4 
                            ${quantity === 800 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        800 ROBUX
                    </motion.button>
                </div>
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(1200)}
                        className={`
                            rounded-3xl p-4 
                            ${quantity === 1200 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        1200 ROBUX
                    </motion.button>
                </div>
                <div className="col-span-1">
                    <motion.button
                        onClick={() => setQuantity(2000)}
                        className={`
                            rounded-3xl p-4 
                            ${quantity === 2000 ? 'border-blue-500 border-8 bg-blue-600 text-gray-100' : 'bg-gray-300 border-8 border-gray-400 text-gray-800'} 
                            shadow-sm text-2xl lg:text-4xl font-black text-center mx-auto
                        `}
                        whileTap={{
                            scale: 0.8,
                            rotate: -5,
                            borderRadius: '50%',
                        }}
                    >
                        2000 ROBUX
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
                    Next
            </motion.button>
        </Card>
    )
}
