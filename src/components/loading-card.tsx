// IMPORTS
import Lottie from 'react-lottie-player'
import { useTranslation } from 'react-i18next'
import Card from './card'
import LoadingAnimation from '../animations/loading.json'

export default function LoadingCard() {
    const { t } = useTranslation()
    // RETURNS
    return (
        <Card
            text={t('loading-text')}
            title={t('loading')}
        >
            <Lottie
                animationData={LoadingAnimation}
                play
                loop
                className="mx-auto w-full"
            />
        </Card>
    )
}
