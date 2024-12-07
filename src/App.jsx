import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/register';
import Login from './pages/login/login';

function App() {
  return (
    <Routes>
      <Route path="/" element={< Login/>} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;