import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Root from './Root';
import Home from './pages/Home';
import Thread from './pages/Thread';
import Topic from './pages/Topic';

function App() {


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="home" element={<Home />} />
            <Route path="topic/:topic" element={<Topic />} />
            <Route path="thread/:thread" element={<Thread />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;