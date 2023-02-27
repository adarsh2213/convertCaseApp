

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Sign from './components/Sign';
import TextForm from './components/TextForm';



function App() {
  return (

    <>

      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path='/' element={<TextForm Heading="Text Summery" />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='sign' element={<Sign />}></Route>

        </Routes>

      </BrowserRouter>

    </>
  );
}

export default App;
