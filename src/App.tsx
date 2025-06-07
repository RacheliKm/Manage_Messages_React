import './App.css';
import React, { HtmlHTMLAttributes, Suspense, useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route,Link,Outlet,useNavigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Managr from './components/Managr/Managr';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import MainPage from './components/MainPage/MainPage';
import About from './components/About/About';
import InsertUser from './components/InsertUser/InsertUser';
import ThePosts from './components/ThePosts/ThePosts';



function App() {
    return (<div className="App">
  <BrowserRouter>
  <Routes> 
  <Route path="/" element={<Login></Login>}></Route>
  
  <Route path="/Home" element={<Home></Home>}>
  <Route path="Managr" element={<Managr></Managr>}></Route>
  <Route path="About" element={<About></About>}></Route>
  <Route path="InsertUser" element={<InsertUser></InsertUser>}></Route>
  </Route>

<Route path="/MainPage" element={<MainPage></MainPage>}>
<Route path="ThePosts" element={<ThePosts></ThePosts>}></Route>
<Route path="About" element={<About></About>}></Route>
<Route path="MainPage" element={<MainPage></MainPage>}></Route>
</Route>

  <Route path="*" element={<NotFound></NotFound>}></Route>
     </Routes>
  </BrowserRouter>
  {/* <Managr></Managr> */}
  </div>)
}

export default App;
