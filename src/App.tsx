import Boost from "./components/Boost"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import UrlShortener from "./components/UrlShortener"
import MainLayout from "./layout/MainLayout"
import PaddedLayout from "./layout/PaddedLayout"


const App = () => {
  return (
   <MainLayout>
    <PaddedLayout>
      <Header />
    </PaddedLayout>
    <PaddedLayout>
      <Hero />
    </PaddedLayout>
      <div className="bg-slate-200 w-full mt-20">
        <PaddedLayout>
          <UrlShortener />
          <Features />
        </PaddedLayout>
      </div>
      <Boost />
      <Footer />
   </MainLayout>
  )
}

export default App
