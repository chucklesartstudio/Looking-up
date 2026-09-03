import { Navbar } from './components/Navbar'
import { CoverPage } from './components/CoverPage'
import { FieldNotebook } from './components/FieldNotebook'
import { KarfuleStory } from './components/KarfuleStory'
import { FourHundredOne } from './components/FourHundredOne'
import { TwoWalksOneLens } from './components/TwoWalksOneLens'
import { WalksBooking } from './components/WalksBooking'
import { ClosingPage } from './components/ClosingPage'
import { Footer } from './components/Footer'

function App() {
  return (
    <main id="top">
      <Navbar />

      <CoverPage />

      <div className="divider">• • •</div>

      <div id="400001">
        <FourHundredOne />
      </div>

      <div className="divider">• • •</div>

      <div id="story">
        <KarfuleStory />
      </div>

      <div className="divider">• • •</div>

      <FieldNotebook />

      <div className="divider">• • •</div>

      <div id="two-walks">
        <TwoWalksOneLens />
      </div>

      <div className="divider">• • •</div>

      <div id="walks">
        <WalksBooking />
      </div>

      <ClosingPage />

      <Footer />
    </main>
  )
}

export default App
