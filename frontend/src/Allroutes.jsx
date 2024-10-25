import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './page/home'
import About from './page/about'
import Login from './page/login'
import Signup from './page/signup'
import Bloglist from './page/bloglist'
import Editblog from './page/editblog'
import Blogpost from './page/blogcreate'

function Allroutes() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/bloglist" element={<Bloglist />}></Route>
        <Route path="/blogcreate" element={<Blogpost />}></Route>
        <Route path="/update/:id/:userId" element={<Editblog />}></Route>
      </Routes>
    </div>
  );
}

export default Allroutes
