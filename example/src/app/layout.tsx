import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'TextiGIF - Example',
    description: 'TextiGIF - Example',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <div className="w-screen h-screen flex flex-col items-center justify-center bg-white text-black">
                    {children}
                </div>
            </body>
        </html>
    )
}
