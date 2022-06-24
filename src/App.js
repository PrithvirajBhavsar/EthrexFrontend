import './App.css';
import Content from './components/Content/Content';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home/Home';
import Movies from './components/Movies/Movies';
import Shows from './components/Shows/Shows';
import Profile from './components/Profile/Profile';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { isAuthorize } from './actions/registrationActions';
import Admin from './components/Admin/Admin';

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isAuthorize());
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/movies" element={<Movies />}></Route>
          <Route exact path="/shows" element={<Shows />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/content" element={<Content />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;