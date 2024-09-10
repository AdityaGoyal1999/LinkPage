import './App.css'
import ProfilePic from './assets/avatar-jessica.jpeg'

const buttonTexts = ['Github', 'Frontend Mentor', 'Linkedin', 'Twitter', 'Instagram']

function App() {

  return (
    <div className="bg-grey-900 w-screen h-screen flex justify-center items-center">
      <div className="bg-grey-800 w-[400px] flex flex-col items-center rounded-2xl p-10">
        <img src={ProfilePic} className="h-24 w-24 rounded-full mb-10" alt="Profile Picture" />
        <h1 className="text-customWhite text-3xl mb-2">Jessica Randall</h1>
        <p className="font-bold text-green text-[14px] mb-10">London, United Kingdom</p>

        <p className="text-customWhite mb-5">&quot;Front-end developer and avid reader.&quot;</p>

        <div className="w-full">
        {
          buttonTexts.map((text) => {
            return (
            <div key={text} className="bg-grey-700 p-3 m-4 rounded-lg hover:bg-green text-customWhite hover:text-grey-700 transition-transform duration-200 ease-in-out active:scale-95">
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
