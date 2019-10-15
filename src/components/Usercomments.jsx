import React, { useState, useEffect } from "react";

function Comments(props) {
  useEffect(() => {
    fetchItem(props.match.params.postId);
  }, [props.match.params.postId]);

  const [items, setItems] = useState([]);

  const fetchItem = async id => {
    const fetchdata = await fetch(
      `https://jsonplaceholder.typicode.com/comments/${id}`
    );
    const items = await fetchdata.json();

    if (Array.isArray(items)) {
      setItems(items);
    } else {
      setItems([items]);
    }
  };

  return (
    <div>
      <h1>User Comments</h1>
      <div className="wrapper_posts">
        {items.map(item => (
          <div key={item.id}>
            <h2>{item.id}</h2>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
