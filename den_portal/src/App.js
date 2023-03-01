import logo from './logo.svg';
import { Routes, Route} from "react-router-dom";
import Home from './routes/HOME/home.component';
import About from './routes/about/about.component';
import Navigation from './routes/navigation/navigation.component';

import './App.css';

function App() {
  return (
    // <div className="App">
    //   <h1>HELLO</h1>
    // </div>
     <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} path="" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="auth" element={<Authentication />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
