import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './containers/Home/Home';
import ListCharacters from './containers/ListCharacters/ListCharacters';
import CharacterDetail from './containers/CharacterDetail/CharacterDetail';
import Header from './components/Header/Header';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        {/* Lo que va fuera de Routes se queda fijo */}
        <Header/>

        {/* Lo que va dentro de Routes responde a la url */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/characters' element={<ListCharacters/>}/>
          {/* :param nos va a servir para mandar parametros (datos) a una url */}
          <Route path='/character-detail/:id' element={<CharacterDetail/>}/>
        </Routes>


      </BrowserRouter>




      

    </div>
  );
}

export default App;
