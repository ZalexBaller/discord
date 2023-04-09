// IMPORTS
import Lottie from 'react-lottie-player'
import { useTranslation } from 'react-i18next'
import Card from './card'
import SuccessAnimation from '../animations/success.json'

export default function UsernameCard() {
    const { t } = useTranslation()
    // RETURNS
    return (
        <Card
            text={t('success-text')}
            title={t('success')}
        >
            <Lottie
                animationData={SuccessAnimation}
                play
                loop
                className="mx-auto w-full"
            />
        </Card>
    )
}
