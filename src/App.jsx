import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Certifications from './components/Certifications'


export default function App() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Home />
      <Certifications />
      <Footer />
    </div>
  )
}