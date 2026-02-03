// app/page.tsx

import HeroSection from '../components/HeroSection'
import HowItWorks from '../components/HowItWorks'
import PopularServices from '../components/PopularServices'
import ServiceProviderCTA from '../components/ServiceProviderCTA'
// import CreateAccount from '../components/CreateAccount'
import CustomerBenefits from '../components/CustomerBenefits'
import SafetySecurity from '../components/SafetySecurity'
import FAQs from '../components/FAQs'
import GetStarted from '../components/GetStarted'

export const metadata = {
  title: 'Neat – Home Services Landing Page',
  description: 'Your one-stop platform for finding and booking home service professionals.',
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function Home() {
  return (
    <>

      <main>
        <HeroSection />
        <HowItWorks />
        <PopularServices />
        <ServiceProviderCTA />
        {/* <CreateAccount /> */}
        <CustomerBenefits />
        <SafetySecurity />
        <FAQs />
        <GetStarted />
      </main>

    </>
  )
}
