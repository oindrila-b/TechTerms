import logo from './logo.svg';
import './App.css';
import { NavbarComponent } from './components/NavbarComponent';
import { Routes,Route } from 'react-router-dom';
import { About,Contribute,Home,AllTerms } from "./components/pages/routes";

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <Routes>
      <Route path="/" element ={<Home/>} />
      <Route path="/home" element ={<Home/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/allTerms" element ={<AllTerms/>} />
        <Route path="/contribute" element ={<Contribute/>} />
      </Routes>
    </div>
  );
}

export default App;
