// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import Feed from './pages/Feed.jsx'
import UserList from './pages/UsersList.jsx'
import CreatePost from './pages/CreatePost.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/users' element={<UserList/>}></Route>
        <Route path='/create-post' element={<CreatePost/>}></Route>
        <Route path="/" element={<Feed />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
