import './App.css'
import Navbar from './assets/components/NabarSection/Navbar'
import Hero from './assets/components/HeroSection/Hero'
import About from './assets/components/AboutSection/About'
import WhyDblock from './assets/components/WhyDblock/WhyDblock'
import Expertise from './assets/components/Expertise/Expertise'
import Footer from './assets/components/Footer/Footer'
import Service from './assets/components/ServiceSection/Service'

function App() {
  return <div id="App" className='flex items-center justify-center flex-col'>
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Service/>
      <Expertise/>
      <WhyDblock/>
    </div>
    <Footer/>
  </div>
}

export default App
