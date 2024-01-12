import { Nav } from '../src/components/nav';
import Login from './components/login';
import Home from './components/home';
import Counter from './components/counter';
import Users from './components/users';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './components/pagenotfound';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
