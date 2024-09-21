import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import {LandingPage} from './Pages';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          {/* <Route path="/login" element={<LoginPage />} /> */}
        </Routes>
      </Router>

    </div>
  );
}

export default App;
