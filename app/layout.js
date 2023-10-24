import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar';


const poppins = Poppins({ subsets: ['latin'], weight: ['200', '400', '600', '800'] })

export const metadata = {
  title: "Seg_Cal",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
