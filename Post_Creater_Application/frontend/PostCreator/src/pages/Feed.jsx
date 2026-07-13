import React, { useState , useEffect} from "react";
import axios from "axios"
// import "./App.css";
const Feed = () => {
  const [posts , setPosts] = useState([
    {
      _id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrqB9DydwJeSQbzEZeAhYsLQZxPf4avjmxm4ACKzBgA&s",
      caption: "This is my first post",
    },
  ]);
  useEffect(() =>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts);
    })
  },[])

  function handleNewPost() {
    window.location.href = "/create-post";
  }
  return (
    <section className="feed-section">
      {posts.length > 0 ? (
        posts.map((post) => (
          <div key={post._id} className="post-card">
            <img src={post.image} alt={post.caption} />
            <p>{post.caption}</p>
          </div>
        ))
      ) : (
        <p>No posts available.</p>
      )}
      <button onClick={handleNewPost} className="newPost-btn">
        New Post
      </button>
    </section>
  );
};

export default Feed;