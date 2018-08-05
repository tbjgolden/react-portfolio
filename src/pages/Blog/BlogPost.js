import React from 'react';
import './BlogPost.scss';

const BlogPost = ({ title, date, html }) => (
  <div className='BlogPost App-row white'>
    <div className='App-row-sizer'>
      <article>
        <h1 className='BlogPost-title'>{title}</h1>
        <small>Published on {date}</small>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </div>
  </div>
);

export default BlogPost;
