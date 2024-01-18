import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Qualification from './components/qualification/Qualification'
const App=()=>{
  return(
    <>
    <Header/>
    <main className="main">
      <Home/>
      <About/>
      <Skills/>
      <Qualification/>
    </main>
    </>
  )
}

export default App
