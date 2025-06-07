import './Managr.css';
import axios from 'axios';
import { UserLogin } from "../../types/userLogin"
import React, { FC, forwardRef, useEffect, useImperativeHandle, useState,useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userListService from '../../services/userList.service';
import { DataGrid ,  GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import ThePosts from '../ThePosts/ThePosts';
import IdPosts from '../IdPosts/IdPosts';
interface ManagrProps {}


  const Managr = forwardRef((prop, ref) => {
    const [listUsers, setListUsers] = useState<UserLogin[]>([])
    const [load, setLoad] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(true)
    const dispatch=useDispatch()
    //כשאר הקומפוננטה עולה
    useEffect(() => {
      loadTable()
    }, [])
  
    const loadTable = () => {
      setLoad(false)
      userListService.getUserList().then((req) => {
        let data = req.data;
        setListUsers(data);
        setLoad(true)
      })
    }
    function sortdata() {
      listUsers.sort((a, b) => {
        if (a.username < b.username) {
          return -1;
        }
        if (a.username > b.username) {
          return 1;
        }
        return 0;
      });
      setListUsers([...listUsers])
    }

    function sendToRedux(event:any){
      let user:UserLogin={
        id: event,username: '', email:'', name:''
      }
      dispatch({type:'USER_TABLE_ID',data:user})
      debugger
     setShow(false)
    }
 return ( <div className="row">
<div className='col-sm-6' style={{marginLeft:"10px",marginTop:"20px"}}>
    <h2> list users</h2> 
    <table className="table">
      <thead>
        <tr>
          <th>UserId</th>
          {/* <th> <button type="button" onClick={sortdata}>userName </button></th> */}
          <th onClick={sortdata}> userName</th>
          <th>email</th>
        </tr>
      </thead>
      {!load ? <div className="spinner-border text-success" role="status"></div> : ''}
      <tbody>
        {
          listUsers.map((user) => {
            return <tr key={user.id}  >
              <td onClick={() => sendToRedux(user.id)}>
              {user.id}
              </td>
              <td onClick={() => sendToRedux(user.id)}>
                {user.username}
              </td>
              <td onClick={() => sendToRedux(user.id)}>
                {user.email}
              </td>
            </tr>
          })
        }
      </tbody>
    </table>
    </div>
     {/* table end */}
    <div  className='col-sm-4' style={{marginLeft:"100px" ,marginTop:"20px"}}>
    {!show ? <div><IdPosts></IdPosts></div> : ''}
  </div>
   {/* new component end */}
 
  </div>
  )})
      
export default Managr;
