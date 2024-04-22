import { useState } from 'react';
import './App.css';
import './Style.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import NavComponent from './components/NavComponent';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';

function App() {
  const [imgSrc, setImgSrc] = useState(img1);

  return (
    <div className="body">
        <NavComponent />
        <ImageComponent src={imgSrc}/>
        <ButtonComponent id='btn1' text='image 1' onClick={() => setImgSrc(img1)}/>
        <ButtonComponent id='btn2' text='image 2' onClick={() => setImgSrc(img2)}/>
        <ButtonComponent id='btn3' text='image 3' onClick={() => setImgSrc(img3)}/>
    </div>
  );
}

export default App;
