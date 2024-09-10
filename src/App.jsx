import './App.css'
import ProfilePic from './assets/avatar-jessica.jpeg'
import { useState, useRef, useEffect } from 'react';

const buttonTexts = ['Github', 'Frontend Mentor', 'Linkedin', 'Twitter', 'Instagram']

function App() {

  const [focusedIndex, setFocusedIndex] = useState(0); // current focused button index
  const buttonRefs = useRef([])

  useEffect(() => {
    if (buttonRefs.current[focusedIndex]) {
      buttonRefs.current[focusedIndex].focus();
    }
  }, [focusedIndex])

  const handleKeyDown = (event) => {
    switch (event.key){
      case 'ArrowDown':
        setFocusedIndex((prevIndex) => (prevIndex + 1) % buttonTexts.length);
        break;
      case 'ArrowUp':
        setFocusedIndex((prevIndex) => (prevIndex - 1 + buttonTexts.length) % buttonTexts.length);
        break;
      case 'Enter':
        console.log(`${buttonTexts[focusedIndex]} button activated`);
        break;
      default:
        break;
    }
  }

  return (
    <div className="bg-grey-900 w-screen h-screen flex justify-center items-center">
      <div className="bg-grey-800 w-[400px] flex flex-col items-center rounded-2xl p-10">
        <img src={ProfilePic} className="h-24 w-24 rounded-full mb-10" alt="Profile Picture" />
        <h1 className="text-customWhite text-3xl mb-2">Jessica Randall</h1>
        <p className="font-bold text-green text-[14px] mb-10">London, United Kingdom</p>

        <p className="text-customWhite mb-5">&quot;Front-end developer and avid reader.&quot;</p>

        <div className="w-full">
        {
          buttonTexts.map((text, index) => {
            return (
            <div 
              key={index} 
              ref={(el) => (buttonRefs.current[index] = el)} 
              className="bg-grey-700 p-3 m-4 rounded-lg hover:bg-green text-customWhite hover:text-grey-700 focus:text-grey-700 focus:bg-green focus:outline-none transition-transform duration-200 ease-in-out active:scale-95"
              onClick={() => console.log(`${buttonTexts[index]} pressed`)}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              >
                <p className="text-center">{text}</p>
              </div>
            )
          })
        }
        </div>
      </div>
    </div>
  )
}

export default App
