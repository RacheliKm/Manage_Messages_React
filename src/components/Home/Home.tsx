import React, { FC ,useEffect, useState} from 'react';
import './Home.css';
import {Link,NavLink,Outlet,useNavigate} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

  const myNav=useNavigate();
  const goToPage=(url:string)=>{
    myNav(url)
  }

  const userReducer=useSelector((store:any)=>store.userReducer)

 return <div >

<div className="HomePage">
<h2>Hello {userReducer.name}</h2>
</div>

    <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
          <Nav className="me-auto">
          <Nav.Link onClick={() => { goToPage('/Home/Managr'); } }> Home page</Nav.Link>
            <Nav.Link onClick={() => { goToPage('/home/About'); } }> About</Nav.Link>
            <Nav.Link onClick={() => { goToPage('/Home/InsertUser'); } }>Insert User</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Outlet></Outlet>
    <img src='https://hdgl.co.il/wp-content/uploads/2022/05/%D7%94%D7%95%D7%93%D7%A2%D7%95%D7%AA-%D7%93%D7%97%D7%99%D7%A4%D7%94-scaled.jpg' style={{width:"100%",height:"100%"}}></img>
  </div>
};

export default Home;
