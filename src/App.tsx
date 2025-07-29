import './App.css'
import FAQ from './pages/FAQ'
import Features from './pages/Features'
import Footer from './components/layouts/Footer'
import Hero from './pages/Hero'
import Navbar from './components/layouts/Navbar'
import Newsletter from './components/layouts/Newsletter'

function App() {

  return (
    <div>

      <Navbar />
      <Hero />
      <Features />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}

export default App
