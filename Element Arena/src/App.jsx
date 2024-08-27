import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/main screen/mainScreen';
import PlayGround from './components/Playground/field';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/game' element={<PlayGround />} />
      </Routes>
    </Router>
  );
}

export default App;
