


import { PlanProvider } from '@/components/share/PlanContext'
import { ContextApi } from '@/components/share/ContextApi'
import { Toaster } from 'react-hot-toast'
import NavBar from '@/components/NavBar'
import './globals.css'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextApi>
          <PlanProvider>
            <NavBar />
            {children}
            <Toaster position="top-right" />
            <Footer/>
          </PlanProvider>
        </ContextApi>
      </body>
    </html>
  )
}