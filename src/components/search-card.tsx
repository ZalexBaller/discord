// IMPORTS
import Lottie from 'react-lottie-player'
import { UserContext } from '@/contexts/user'
import { useContext, useState } from 'react'
import Card from './card'
import SearchingAnimation from '../animations/searching.json'

export default function UsernameCard() {
    // VARIABLES
    const {
        setUsername, setPlatform, platform, username,
    } = useContext(UserContext)
    const [error, setError] = useState<string | null>(null)

    // RETURNS
    return (
        <Card
            text="We are searching for your Roblox Username. Please wait..."
            title="Searching..."
        >
            <Lottie
                animationData={SearchingAnimation}
                play
                loop
                className="mx-auto w-full"
            />
        </Card>
    )
}
