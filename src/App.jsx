import './App.css';
import './Style.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';
import NavComponent from './components/NavComponent';

function App() {
  return (
    <div className="body">
        <NavComponent />
        <ImageComponent />
        <ButtonComponent />
    </div>
  );
}

export default App;
