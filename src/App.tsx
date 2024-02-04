import { Features,Footer,Blog,WhatGPT3,Header,Possibility } from './containers'
import { CTA,Article,Brand,Navbar } from './components/project-one'
import './App.css'
const App = () => {
   return (
      <div className='App' >
         <div className="gradient__bg">
            <Navbar/>
            <Header/>
         </div>
         <Brand/>
         <WhatGPT3/>
         <Features/>
         <Possibility/>
         <CTA/>
         <Blog/>
         <Footer/>
      </div>
   )
}
export default App