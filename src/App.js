import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import Footer from './components/Footer';
import { Routes, Route } from "react-router-dom";
import SinglePostPage from './components/SinglePostPage';
import Layout from './layouts/layout';
import CreatePost from './pages/CreatePosts';
import { news } from './data/NewsCard';
import { useState, createContext } from 'react';

export const postContext = createContext('default');

function App() {
  const[posts, setPosts] = useState(news)

  return (
    <>
      <div className='body'>
      <postContext.Provider value={{posts, setPosts}}>
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
      </postContext.Provider>
      <div className='footer'>
        <Footer />
      </div>
      </div>
    </>
  )
}

export default App;
