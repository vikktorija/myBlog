// import { Provider } from 'react-redux';
// import store from './store';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import SinglePostPage from './components/SinglePostPage';
import Layout from './layouts/layout';
import CreatePost from './pages/CreatePosts';
import { createContext } from 'react';

export const postContext = createContext('default');

function App() {

  return (
    <>
      <div className='body'>
        <Routes>
          <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/blog' element={<Blog />} />
              <Route path='/blog/:id' element={<SinglePostPage />} />
              <Route path="/addpost/" element={<CreatePost />} />
              <Route path='/about' element={<About />} />
            </Route>
        </Routes>
        <div className='footer'>
            <Footer />
        </div>
      </div>
    </>
  );
}

export const PostContext = createContext('default');
export default App;
