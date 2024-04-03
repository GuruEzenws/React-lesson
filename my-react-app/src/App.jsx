import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './Header'
import Content from './Content'
import './App.css'




function App() {
 

  return (
    <>
      <div className='container'>
        <Header/>
        <Content/>
      </div>
    </>
  )
}

export default App
