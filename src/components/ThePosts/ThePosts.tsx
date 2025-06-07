import React, { FC,forwardRef,useEffect, useRef, useState } from 'react';
import './ThePosts.css';
import { useSelector } from 'react-redux';
import { UsersDetails } from '../../types/usersDetails';
import userServiceService from '../../services/userService.service';

interface ThePostsrProps {}

  const ThePosts = forwardRef((prop, ref) => {
  const [listPost, setListPost] = useState<UsersDetails[]>([])
  const [load, setLoad] = useState<boolean>(false)

  //כשאר הקומפוננטה עולה
  useEffect(() => {
    loadTable()
  }, [])
  const userReducer=useSelector((store:any)=>store.userReducer)
  
  const loadTable = () => {
    setLoad(false)
    userServiceService.getPostList().then((req) => {
      let data = req.data;
        debugger
      setListPost(data);
      setLoad(true)
    })
  }
  let counter=0;
  const titleRef = useRef<any>();
  const bodyRef = useRef<any>();
  const [error,setError]=useState<any>({});

   const addPost = async (event: any) => {
    let error:any={};
    let title=titleRef.current.value;
    let body=bodyRef.current.value;
    event?.preventDefault();
    
    if(title.length==0 || body.length==0){
      if(body.length==0)
       error.body="is required"
      if(title.length==0 )
      error.title="is required"
      setError({...error})
  }

else{
    setError({...error})
    let post: UsersDetails = {
      userId:userReducer.id,
      id: counter+1,
      title: titleRef.current.value,
      body: bodyRef.current.value
    }
  await userServiceService.insertPost(post).then(()=>{
    listPost.unshift(post);
    setListPost([...listPost]);
  })
}
} //כאן נסגר הפונקציה addPost

  return (<div className="row">
   <div className="col-sm-7" style={{marginRight:'10px'}}>
    <h2> post user</h2>
    <table className="table" >
      <thead>
        <tr>
          <th>post id</th>
          <th>title</th>
          <th>description</th>
        </tr>
      </thead>
      {!load ? <div className="spinner-border text-success" role="status"></div> : ''}
      <tbody>
        {
          listPost.map((post) => {
            if(userReducer.id==post.userId){
            // listPost.unshift(post)
            counter++
            return <tr key={post.id}>
              <td>
              {counter}
                {/* {post.id} */}
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

  <div className='col-sm-2'>
        <form onSubmit={(event) => { addPost(event) }} className='mt-5'>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter title</label>
            <input ref={titleRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title" />
            {error && error.title ? <p style={{ color: 'red' }}>{error.title}</p> : ''}
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter body</label>
            <input ref={bodyRef} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter body" />
            {error && error.body ? <p style={{ color: 'red' }}>{error.body}</p> : ''}
          </div>
          <br></br>
          <button className="btn btn-primary">Submit</button>
        </form>
      </div>

  </div>)
})

export default ThePosts;

