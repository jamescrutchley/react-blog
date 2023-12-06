import { mockPostArray } from '../mocks/mockData';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Feed = () => {
    const [posts, setPosts] = useState(mockPostArray);


    const postsArray = (
        <ul>
          {posts.map((post) => (
            <li key={post._id}>
              <h3>
              <Link
              to={`/posts/${post._id}`}
              state={post._id}
            >
              {post.title}
            </Link>
            </h3>
              <p>{post.copy.slice(0, 20)}</p>
            </li>
          ))}
        </ul>
      );

    return (
        <>
        <h1>Feed</h1>
        {postsArray}
        </>
    )
}

export default Feed;