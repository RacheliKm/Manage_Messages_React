import './Login.css'
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { send } from 'process';
import axios from 'axios';
import userList from '../../services/userList.service';
import { UserLogin } from "../../types/userLogin";
import { useDispatch } from 'react-redux';

export default function Login() {

  const dispatch=useDispatch()
    const mynavigate=useNavigate();
    const emailRef=useRef<any>();
    const idRef=useRef<any>();
    const nameRef=useRef<any>();
    const [error,setError]=useState<any>({});
    const [listUsers,setListUsers]=useState<UserLogin[]>([])
    useEffect(()=>{
      userList.getUserList().then((req)=>{
        let data=req.data
        setListUsers(data)
      })
    },[])

    function login(event:any){
      let count=0
      let numUser=''
      let emailUser=''
      let nameUser=''
        event?.preventDefault();
        let error:any={};
        let email=emailRef.current.value;
        let id=idRef.current.value;
        let name=nameRef.current.value;
        if(email.length==0){
            error.email="is required"
        }
        else if(email.length<6 ){
            error.email="6 מינימום תווים"
        }
        if(name.length==0){
          error.name="is required"
      }
      else if(name.length<2 ){
          error.name="2 מינימום תווים"
      }
        if(id.length==0){
          error.id="is required"
      }
       for (let index = 0; index < email.length; index++) {
         if(email[index]=="@"){
           count=count+1}
       }
     if(count!=1)
     error.email="יש להכניס כתובת תקינה"
///הכנסת האיי די לתוך משתנה
     for (let index = 0; index < id.length; index++) {
      numUser=id[index]+numUser
     }
     let a = +numUser
///הכנסת המייל לתוך משתנה
     for (let index = 0; index < email.length; index++) {
      emailUser=emailUser+email[index]
    }
    for (let index = 0; index < name.length; index++) {
      nameUser=nameUser+name[index]
    }
        setError({...error})
        
        event.preventDefault();
        let user:UserLogin={
          id: idRef.current.value,username: '', email: emailRef.current.value, name: nameRef.current.value
        }
        dispatch({type:'SHOW_USER',data:user})

        listUsers.map((data,index)=>{
          if(a==data.id && emailUser==data.email && nameUser==data.name){
           if(a==7)
           mynavigate( "/Home")
           else
           mynavigate( "/MainPage")

          }
           })
    }

    function checkInput(){
        // let count=0
        let error:any={}
        let email=emailRef.current.value;
        let name=nameRef.current.value;
        console.log(email)

        if(email.length==0){
            error.email="is required"
        }
        else if(email.length<6){
            error.email="6 מינימום תווים"
        }
        if(name.length==0){
          error.name="is required"
      }
      else if(name.length<2){
          error.name="2 מינימום תווים"
      }
      
        setError({...error})
}

    return(<div>
    <div className="LogIn" style={{marginTop:"10%"}}>
    <form>
      <div className="con">
        <header className="head-form">
          <h2>Log In</h2>
        </header>
        <br/>
        <br></br>
        <div className="field-set">
          <span className="input-item">
            <i className="fa fa-user-circle"></i>
          </span>
          <input onChange={checkInput} ref={emailRef} className="form-input" id="txt-input" type="email" placeholder="Email" required/>
          {error && error.email ? <p style={{ color: 'red' }}>{error.email}</p> : ''}
          <br/>
          <span className="input-item">
            <i className="fa fa-key"></i>
          </span>
          <input  ref={idRef}  className="form-input" type="id" placeholder="Id" id="pwd" name="id" required/>
          {error && error.id ? <p style={{ color: 'red' }}>{error.id}</p> : ''}
          <br/>
          
          <input onChange={checkInput} ref={nameRef} className="form-input" id="txt-input" type="name" style={{width:"262px"}} placeholder="Name" required/>
          {error && error.name ? <p style={{ color: 'red' }}>{error.name}</p> : ''}
          <br/>
          <button onClick={login} className="log-in"> Log In </button>
        </div>
  
        <div className="other">
          <button className="btn submits frgt-pass">Forgot Password</button>
          <button className="btn submits sign-up">Sign Up
          <i className="fa fa-user-plus" aria-hidden="true"></i>
          </button>
        </div>
</div>
</form>
  </div>
  </div>)
}