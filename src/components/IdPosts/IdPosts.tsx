
import React, { FC,forwardRef,useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { UsersDetails } from '../../types/usersDetails';
import userServiceService from '../../services/userService.service';
import tableIdReducer from '../../redux/tableIdReducer';
import './IdPosts.css';

interface IdPostsProps {}

const  IdPosts= forwardRef((prop, ref) => {
  const [listPost, setListPost] = useState<UsersDetails[]>([])
  const [load, setLoad] = useState<boolean>(false)
//כשאר הקומפוננטה עולה
useEffect(() => {
  loadTable()
}, [])
const tableIdReducer=useSelector((store:any)=>store.tableIdReducer)

const loadTable = () => {
  setLoad(false)
  userServiceService.getPostList().then((req) => {
    let data = req.data;
      debugger
    setListPost(data);
    setLoad(true)
  })
}

return (<div className="row">
 <div >
  <h2> post user {tableIdReducer.id}</h2>
  <table className="table" >
    <thead>
      <tr>
        <th>id</th>
        <th>title</th>
        <th>description</th>
      </tr>
    </thead>
    {!load ? <div className="spinner-border text-success" role="status"></div> : ''}
    <tbody>
      {
        listPost.map((post) => {
          if(tableIdReducer.id==post.userId){
          return <tr key={post.id}>
            <td>
              {post.id}
            </td>
            <td>
              {post.title}
            </td>
            <td>
              {post.body}
            </td>
          </tr>
          }
        })
      }
    </tbody>
  </table>
</div>


</div>)
})

export default IdPosts;
