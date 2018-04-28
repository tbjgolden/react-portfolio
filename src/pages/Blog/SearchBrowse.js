import React from 'react';
import Columns from '../../Columns';
import { Link } from 'react-router-dom';
import './SearchBrowse.scss';

const SearchBrowse = ({ posts }) => (
  <div className="SearchBrowse App-row white">
    <div className="App-row-sizer">
      <Columns>
        {
          posts.map(post => (
            <div>
              <div key={post.date} className='SearchBrowse-post'>
                <div className='SearchBrowse-post-title'>
                  <Link to={`/blog/${post.url}`}>{post.title}</Link>
                </div>
                <small>{post.date}</small>
              </div>
            </div>
          ))
        }
      </Columns>
    </div>
  </div>
);

export default SearchBrowse;
