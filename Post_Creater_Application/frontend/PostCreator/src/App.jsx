import React from 'react'
import './index.css'
import './App.css'
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'
import CreatePost from './pages/CreatePost'
import Feed from './pages/Feed'
const App = () => {
  return (
    <div>
      <section>
        <Router>
          <Routes>
            <Route path="/create-post" element={<CreatePost/>} />
            <Route path="/feed" element={<Feed/>} />
          </Routes>
        </Router>
      </section>
    </div>
  )
}

export default App
