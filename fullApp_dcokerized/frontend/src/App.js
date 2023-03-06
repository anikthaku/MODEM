import { ImageUpload } from "./home";
import Header from "./components/Header";
import Samples from "./components/Samples";
import About from "./components/About"

function App() {
  return (
    <div>
      <Header />
      <ImageUpload />
      {/* <Samples /> */}
      <About />
    </div>
  )
}

export default App;
