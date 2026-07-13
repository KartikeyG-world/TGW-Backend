import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const CreatePost = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("Form Submitted");

        const formData = new FormData(e.target);

        axios.post("http://localhost:3000/createPost" , formData)
        .then((res)=>{
            alert("Post created successfully")
            navigate("/feed");
        })
        .catch((err)=>{
            console.log(err);
            alert("Error in creating post");
        })
    }
  return (
    <div>
      <section className='create-post-section'>
        <h1 id="create-post">Create Post</h1>
        <form className='create-post-form' onSubmit={handleSubmit}>
            <input id = "post-image" type="file" name = "image" accept="image/*" required />
            <input id='post-caption' type="text" name = "caption" placeholder="Enter caption" required />
            <button id='post-btn' type="submit">Create Post</button>
        </form>
      </section>
    </div>
  )
}

export default CreatePost