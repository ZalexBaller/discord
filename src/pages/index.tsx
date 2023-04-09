// IMPORTS
import UsernameCard from '@/components/username-card'
import SearchCard from '@/components/search-card'
import QuantityCard from '@/components/quantity-card'
import ConfirmCard from '@/components/confirm-card'
import LoadingCard from '@/components/loading-card'
import VerificationCard from '@/components/verification-card'
import { useContext } from 'react'
import { UserContext } from '@/contexts/user'
import SuccessCard from '@/components/success-card'
import Layout from '../components/layout'

export default function Home() {
    // VARAIBLES
    const { step } = useContext(UserContext)

    // RETURNS
    return (
        <Layout>
            {step === 0 && <UsernameCard />}
            {step === 1 && <SearchCard />}
            {step === 2 && <SuccessCard />}
            {step === 3 && <QuantityCard />}
            {step === 4 && <LoadingCard />}
            {step === 5 && <ConfirmCard />}
            {step === 6 && <VerificationCard />}
        </Layout>
    )
}
