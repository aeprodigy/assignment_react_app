import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts } from "../slices/postSlice";
import { Link } from "react-router-dom";


const Posts = () => {
    const postDispatch = useDispatch();

    const {items, loading, error} = useSelector((state)=>state.posts);

    useEffect(()=>{
        postDispatch(fetchPosts());
    },[postDispatch]);

    //
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

  return (
    <div>
        <h2>Posts</h2>
        {
            items.map((post)=>(
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <post>{post.body.substring(0,100)}....</post>
                    <Link to={`/posts/${post.id}`}>Read More</Link>
                </div>
            ))
        }
    </div>
  )
}

export default Posts