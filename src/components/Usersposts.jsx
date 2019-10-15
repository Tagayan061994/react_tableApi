import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Posts(props) {
  useEffect(() => {
    fetchItems(props.match.params.userId);
  }, [props.match.params.userId]);

  const [items, setItems] = useState([]);

  const fetchItems = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const response = await data.json();
    const newItems = response.filter(resp => resp.userId === Number(id));
    if (Array.isArray(newItems)) {
      setItems(newItems)
    }
    else {
      setItems([newItems]);
    }
  };

  console.log(props)

  return (
    <div>
       <h1>User Posts</h1>
      {items.map(item => (
        <div key={item.id} className="wrapper_posts">
          <h2>{item.id}</h2>
          <Link to={`/Userposts/${props.match.params.userId}/${item.id}`}>
            <h3>{item.title}</h3>
          </Link>

          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
