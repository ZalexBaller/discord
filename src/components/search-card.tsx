// IMPORTS
import Lottie from 'react-lottie-player'
import { UserContext } from '@/contexts/user'
import { useContext, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Card from './card'
import SearchingAnimation from '../animations/searching.json'

export default function UsernameCard() {
    // VARIABLES
    const { t } = useTranslation()
    const {
        setUsername, setPlatform, platform, username,
    } = useContext(UserContext)
    const [error, setError] = useState<string | null>(null)

    // RETURNS
    return (
        <Card
            text={t('searching-text')}
            title={t('searching')}
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
