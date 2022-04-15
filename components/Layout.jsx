import Navbar from './navbar'
import Footer from './footer'
// New Footer Importing
import NewFooter from '../components/constants/footers'
import Mobilenav from '../components/mobileNav'

export default function Layout({ children }) {
  return (
    <>
      <Navbar /> 
      <Mobilenav/>
      <main>{children}</main>
      <NewFooter/>
      <Footer />
      {/* Embedding New Footer Feature */}
    
    </>
  )
}