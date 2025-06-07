import { Container, Nav, Navbar } from 'react-bootstrap';
import { Outlet, useNavigate } from 'react-router-dom';
import './MainPage.css';
import userServiceService from '../../services/userService.service';
import React, { FC, forwardRef, useEffect, useImperativeHandle, useState } from 'react';
import { UsersDetails } from '../../types/usersDetails';
import { useDispatch, useSelector } from 'react-redux';

const MainPage = () => {

  const myNav=useNavigate();
  const goToPage=(url:string)=>{
    myNav(url)
  }

  const userReducer=useSelector((store:any)=>store.userReducer)

 return <div>

<div className="MainPage">
<h2>Hello {userReducer.name}</h2>
</div>

    <Navbar bg="dark" variant="dark">
        <Container>
          <Nav className="me-auto">
          <Nav.Link onClick={() => { goToPage('/MainPage'); } }> Home page</Nav.Link>
            <Nav.Link onClick={() => { goToPage('/MainPage/ThePosts'); } }>ThePosts </Nav.Link>
            <Nav.Link onClick={() => { goToPage('/MainPage/About'); } }>About </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

    <Outlet></Outlet>
    <img src='https://hdgl.co.il/wp-content/uploads/2022/05/%D7%94%D7%95%D7%93%D7%A2%D7%95%D7%AA-%D7%93%D7%97%D7%99%D7%A4%D7%94-scaled.jpg' style={{width:"100%",height:"100%"}}></img>

  </div>
};
export default MainPage;


 