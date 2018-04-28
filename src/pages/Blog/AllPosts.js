import React from 'react';
import BlogPost from './BlogPost';

const AllPosts = ({ posts }) => (
  <div>
    {posts.map(post => <BlogPost key={post.date} {...post} />)}
  </div>
);

export default AllPosts;
