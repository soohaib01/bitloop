import Navbar from './navbar'
import Footer from './footer'
import Mobilenav from '../components/mobileNav'

export default function Layout({ children }) {
  return (
    <>
       <Navbar /> 
      <Mobilenav/>
      <main>{children}</main>
      <Footer />
    </>
  )
}