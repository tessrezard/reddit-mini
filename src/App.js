import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Thread from './pages/Thread';
import Subreddit from './pages/Subreddit';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="home" element={<Home />} />
            <Route path="topic/:topic" element={<Subreddit />} />
            <Route path="thread/:thread" element={<Thread />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;