import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
    // hamza@picxaart.com
  )
}

export default Layout
