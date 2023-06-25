import { Provider } from 'react-redux';
import store from './store';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { About } from './pages/About';
import Footer from './components/Footer';
import { Router, Route } from "react-router-dom";
import SinglePostPage from './components/SinglePostPage';
import Layout from './layouts/layout';
import CreatePost from './pages/CreatePosts';
import { useState, createContext } from 'react';

export const postContext = createContext('default');

function App() {

  return (
    <PostContext.Provider store={store}>
      <Router>
        <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<SinglePostPage />} />
            <Route path="/addpost/" element={<CreatePost />} />
            <Route path='/about' element={<About />} />
          </Route>
      </Router>
    </PostContext.Provider>
  );
}

export const PostContext = createContext('default');
export default App;
