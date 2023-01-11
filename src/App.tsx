import { useState } from 'react'
import './App.css'
import ReactCardFlip from 'react-card-flip';
import Img from './assets/pngwing.com.png'

function App() {
  const [isFlipped, setIsFlipped] = useState(false)
  function handleClick(e:any){
    e.preventDefault()
    console.log(e)
    setIsFlipped(prev => !prev)
  }
  return (
    <div className="App">
      <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
        <div className='container' onMouseEnter={handleClick}>
          <img className='imageFront' src={Img}/>
        </div>
        <div className='container' onMouseLeave={handleClick}>
          <label className='tag'>Price</label>
          <img className='imageBack' src={Img}/>
          <label className='tag'>$100</label>
        </div>
      </ReactCardFlip>
    </div>
  )
}

export default App
