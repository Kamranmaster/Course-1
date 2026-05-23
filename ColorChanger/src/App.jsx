import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  // function changeColor(color){
  //   setcolor(color)
  // }

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ background: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcolor("red")} //onClick button to operate
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"

              style={{ background: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setcolor("blue")}
              className="outline-none px-4 py-1 rounded-full text-black shadow-lg"

              style={{
                background:'blue'
              }}
            >
             Blue
            </button>
            <button
            onClick={()=>setcolor("pink")}
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"

            style={{
              background:'pink'
            }}
            >
              Pink
            </button>

          </div>
        </div>
      </div>
    </>
  );
}

export default App
