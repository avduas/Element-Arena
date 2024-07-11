import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './components/mainScreen';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainScreen />} />
        <Route path='/mock' element={<MockComponent />} /> 
      </Routes>
    </Router>
  );
}

function MockComponent() {
  return <div>Mock Component</div>;
}

export default App;
