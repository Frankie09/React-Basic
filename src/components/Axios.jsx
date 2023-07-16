import axios from "axios";

import React from "react";
const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
const Axios = () => {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
        });
      }, []);
    
      if (!post) return null;
    console.log(post);
      return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      );
   
}

export default Axios