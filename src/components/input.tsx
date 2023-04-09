// IMPORTS
import Image from 'next/image'
import Lottie from 'react-lottie-player'
import ErrorAnimation from '@/animations/error.json'

export default function Input({
    image, placeholder, error, onChange,
}:
    {
        image?: string,
        placeholder?: string,
        error?: string | null,
        onChange: any
    }) {
    return (
        <div className="space-y-2">
            <div
                className={`
                flex gap-2 lg:gap-6 overflow-hidden 
                items-center rounded-2xl shadow-sm 
                text-xl lg:text-3xl font-bold bg-gray-300 
                p-6 lg:p-8
                ${error ? 'border-red-500 border-4 animate__animated animate__shakeX' : ''}
            `}
            >
                {image && (
                    <Image
                        alt="icon"
                        src={image}
                        width={30}
                        height={30}
                        className="animate-spin"
                    />
                )}
                <input
                    onChange={onChange}
                    type="text"
                    placeholder={placeholder || ''}
                    className="border-0 bg-gray-300 outline-none border-none"
                />
            </div>
            {error && (
                <div className="lg:flex gap-1 items-center">
                    <Lottie
                        animationData={ErrorAnimation}
                        play
                        loop
                        className="w-14 mx-auto lg:m-0"
                    />
                    <p className="text-red-500 text-md lg:text-xl font-medium">{error}</p>
                </div>
            )}
        </div>
    )
}
