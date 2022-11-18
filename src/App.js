import { Main } from './screens/main';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import { Add } from './screens/add';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
