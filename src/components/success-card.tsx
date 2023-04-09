// IMPORTS
import Lottie from 'react-lottie-player'
import Card from './card'
import SuccessAnimation from '../animations/success.json'

export default function UsernameCard() {
    // RETURNS
    return (
        <Card
            text="Congratulations! We found your account!"
            title="User Found!"
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
