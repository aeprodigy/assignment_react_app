import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


const PostDetailsPage = () => {

    const {id} = useParams();
    const [post, setPost] = useState(null);
    const [ comments, setComments] = useState([]);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res)=>setPost(res.data));
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((res)=> setComments(res.data));
    },[id]);

    if(!post) return <p>Loading</p>
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
      <h3>Comments</h3>
      {comments.map((comment)=>(
        <p key={comment.id}><b>{comment.email}:</b> {comment.body}</p>
      ))}
    </div>
  );
}

export default PostDetailsPage