import { Nav } from '../src/components/nav';
import Login from './components/login';
import Home from './components/home';
import Counter from './components/counter';
import Users from './components/users';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
