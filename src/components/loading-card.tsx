// IMPORTS
import Lottie from 'react-lottie-player'
import Card from './card'
import LoadingAnimation from '../animations/loading.json'

export default function LoadingCard() {
    // RETURNS
    return (
        <Card
            text="We are generating your Robux. This may take a few seconds."
            title="Generating..."
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
