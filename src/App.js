import './App.css'
import { GlobalStyle } from './styles/GlobalStyle'
import Quote from './sections/Quote'
import { HeroSection } from './sections/HeroSection'
import PhoneModel from './sections/PhoneModel'
import DesignSection from './sections/DesignSection'
import DisplaySection from './sections/DisplaySection'
import ProcessorSection from './sections/ProcessorSection'
import BatterySection from './sections/BatterySection'
import ColorSection from './sections/ColorSection'
import CameraSection from './sections/CameraSection'
import PricingSection from './sections/PricingSection'

function App() {
  return (
    <div className="font-isReg  " dir="rtl">
      <GlobalStyle />
      <Quote />
      {/* <PhoneModel /> */}
      <HeroSection />
      <DesignSection />
      <DisplaySection />
      <ProcessorSection />
      <BatterySection />
      <ColorSection />
      <CameraSection />
      <PricingSection />
    </div>
  )
}

export default App
