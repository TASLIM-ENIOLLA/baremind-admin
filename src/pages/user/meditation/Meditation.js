import './meditation.css'
import {useEffect} from 'react'
import AllContents from '../../../components/meditation/AllContents';
// import { Routes, Route } from 'react-router'

const Meditation = ({ setNavTitle }) => {
  useEffect(() => {
    setNavTitle("Meditation");
  }, []);
  return (
    <div>
      <AllContents />
      {/* <Routes>
       
      </Routes> */}
    </div>
  )
};

export default Meditation;
