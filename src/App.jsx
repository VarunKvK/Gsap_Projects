import './App.css'

import { useEffect,useLayoutEffect,useState } from 'react'
import {gsap} from "gsap";
import ThePage from './components/ThePage';
import Loader from './components/Loader';
 
function App() {
  const [loaderFinished, setloader]=useState(false)
  const [timeline, settimeline]=useState(null)
  const [data, setdata]=useState(false)

  useEffect(() => {
    const t1 = gsap.timeline({
      onComplete: () => setloader(true)
    });

    settimeline(t1);
    return () => t1.kill(); // Use kill() instead of revert()
  }, []);

  return (
    <>
    {!loaderFinished? <Loader timeline={timeline}/>:<ThePage timeline={timeline}/>}
    </>
  )
}

export default App
