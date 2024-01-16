import { Nav } from '../src/components/nav';
import Login from './components/login';
import Home from './components/home';
import Counter from './components/counter';
import Users from './components/users';
import { Routes, Route, Navigate } from 'react-router-dom';
import Posts from './components/posts';
import AddPost from './components/addpost';
import UpdatePost from './components/updatepost';
import PageNotFound from './components/pagenotfound';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<Users />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/add" element={<AddPost />} />
        <Route path="/posts/update/:id" element={<UpdatePost />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes >
    </>
  );
}

export default App;
