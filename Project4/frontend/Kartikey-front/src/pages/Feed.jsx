import React, { useState } from "react";

const Feed = () => {
  const [posts] = useState([
    {
      _id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXrqB9DydwJeSQbzEZeAhYsLQZxPf4avjmxm4ACKzBgA&s",
      caption: "This is my first post",
    },
  ]);

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
    </section>
  );
};

export default Feed;