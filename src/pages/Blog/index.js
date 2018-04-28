import React, { Component } from 'react';
import Jumbotron from '../../Jumbotron';
import { styleSheets, posts } from './data';
import './index.scss';

let styleSheet = 0;

class Blog extends Component {
  toggleStyle () {
    styleSheet = ((styleSheet || 0) + 1) % styleSheets.length;
    this.forceUpdate();
  }

  componentDidMount () {
    (this.blogContainer || {}).innerHTML = posts.map(generateBlogPost).join('');
  }

  render () {
    return (
      <div className='Blog'>
        <Jumbotron>
          <div className='App-row white'>
            <div className='App-row-sizer'>
              <div className='App-row-title Blog-title' />
              <div className='App-row-subtitle Blog-subtitle' />
              <div className='App-row-description Blog-panic-button-container'>
                <div className='Blog-panic-button' onClick={() => this.toggleStyle()} tabIndex='0' role='button' />
              </div>
            </div>
          </div>
        </Jumbotron>
        <div id='blog-container' ref={el => { this.blogContainer = el; }} />
        <style dangerouslySetInnerHTML={{ __html: styleSheets[styleSheet] }} />
      </div>
    );
  }
}

function generateBlogPost (post, i) {
  return `
    <div class="App-row white">
      <div class="App-row-sizer">
        <article id="${post.title.replace(/[^a-zA-Z]/g, '').toLowerCase()}" class="blog-post">
          <h1 class="Blog-post-title">${post.title}</h1>
          <p><small>Published on ${post.date}</small></p>
          ${post.html}
        </article>
      </div>
    </div>
  `;
}

export default Blog;
