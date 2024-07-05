import './App.css';
import { ClickerPage } from './pages/clicker/ClickerPage';
import { ToDoPage } from './pages/todo/ToDoPage';
import { Route, Routes, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate()
  return (
    <div className="App">
        <button className='navigation-button' onClick={() => navigate('clicker')}> Link to clicker </button>
        <button className='navigation-button' onClick={() => navigate('todo')}> Link to ToDo </button>
        <Routes>
            <Route path={'/clicker'} element={<ClickerPage />} />
            <Route path={'/todo'} element={<ToDoPage />} />
        </Routes>
    </div>  
  );
}

export default App;
