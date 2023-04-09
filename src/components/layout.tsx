// IMPORTS
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <div className="min-h-screen backdrop-blur-lg">
            <div className="container max-w-2xl mx-auto px-6 py-16 lg:py-36">
                {children}
            </div>
        </div>
    )
}
