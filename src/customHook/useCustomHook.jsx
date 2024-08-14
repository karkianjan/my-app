import React, { useState } from "react";
import useFetch from "./customHook";

function Data() {
  const [shouldFetch, setShouldFetch] = useState(false);
  const { data, loading, error } = useFetch(
    shouldFetch ? "https://jsonplaceholder.typicode.com/todos/1" : null
  );

  if (loading) return <p>Loading.........</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Posts</h1>
      <button onClick={() => setShouldFetch(true)}>Fetch Data</button>
      {shouldFetch && data && (
        <ul>
          {data.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Data;