import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreateAccount from './Authentication/CreateAccount';
import LoginAccount from './Authentication/LoginAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateAccount />} />
        <Route path="/masukakun" element={<LoginAccount />} />
      </Routes>
    </Router>
  );
}

export default App;
