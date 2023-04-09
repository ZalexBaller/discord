// IMPORTS
import { useContext } from 'react'
import { UserContext } from '@/contexts/user'
import Card from './card'

export default function ConfirmCard() {
    // VARIABLES
    const { quantity, username, platform } = useContext(UserContext)

    // RETURNS
    return (
        <Card
            title="Confirmation"
            text="This is a confirmation of your data."
        >
            <div className="bg-gray-300 rounded-2xl shadow-md p-3 lg:p-6 border-4 border-blue-600">
                <table className="w-full">
                    <tr>
                        <td>
                            <h1 className="text-lg lg:text-2xl font-black text-gray-500 my-4">USERNAME</h1>
                        </td>
                        <td>
                            <h1 className="text-lg lg:text-2xl font-black text-gray-800 my-4">{username}</h1>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h1 className="text-lg lg:text-2xl font-black text-gray-500 my-4">PLATFORM</h1>
                        </td>
                        <td>
                            <h1 className="text-lg lg:text-2xl font-black text-gray-800 my-4">{platform}</h1>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <h1 className="text-lg lg:text-2xl font-black text-gray-500 my-4">QUANTITY</h1>
                        </td>
                        <td>
                            <h1 className="text-lg lg:text-2xl font-black text-gray-800 my-4">
                                {quantity}
                                {' '}
                                ROBUX
                            </h1>
                        </td>
                    </tr>
                </table>
            </div>
        </Card>
    )
}
