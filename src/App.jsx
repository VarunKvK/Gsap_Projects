import './App.css'
import Arrivals from './components/Arrivals'
import Category from './components/Category'
import Collab from './components/Collab'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Social from './components/Social'

function App() {

  return (
    <>
      <Navbar/>
      <Header/>
      <Arrivals/>
      <Category/>
      <Collab/>
      <Newsletter/>
      <Social/>
    </>
  )
}

export default App
