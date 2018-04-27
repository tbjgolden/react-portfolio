import React, { Component } from 'react';
import Jumbotron from '../../Jumbotron';
import nicemark from '../../lib/nicemark.min';
import styleSheets from './data';
import './index.scss';

let styleSheet = 0;

class Blog extends Component {
  constructor (props) {
    super(props);
    this.state = {
      fetched: false
    };
  }

  componentDidMount () {
    let numberLeft = 1;
    const posts = new Array(numberLeft).fill(null);

    const blogContainerEl = document.querySelector('#blog-container');

    const blogPostReceived = (post, i) => {
      const [title, date, ...rest] = post.split('\n');
      const md = rest.join('\n');
      posts[i] = { title, date, md, html: nicemark(md) };
      if (!--numberLeft) {
        generateBlog(posts, blogContainerEl);
        this.setState({ fetched: true });
      }
    };

    posts.forEach((_, i) => {
      getAjax(`/posts/${i}.md`, post => blogPostReceived(post, i))
    });
  }

  toggleStyle () {
    styleSheet = ((styleSheet || 0) + 1) % styleSheets.length;
    this.forceUpdate();
  }

  render () {
    const { fetched } = this.state;

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
        <div id='blog-container' />
        {
          fetched
            ? null
            : (
              <div className='App-row white'>
                <div className='App-row-sizer'>
                  <div className='App-row-header'>
                    <img alt='Loading...' src='images/loading.gif' style={{ width: '2.5ex' }} />
                  </div>
                </div>
              </div>
            )
        }
        <style dangerouslySetInnerHTML={{ __html: styleSheets[styleSheet] }} />
      </div>
    );
  }
}

function generateBlog (posts, container) {
  container.innerHTML = posts.map(generateBlogPost).join('');
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

function getAjax(url, success, failure = res => { throw new Error(res) }) {
  try {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = () =>
      xhr.readyState > 3  && (
        xhr.status === 200
          ? success(xhr.responseText)
          : failure(xhr.responseText)
      );
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.send();
  } catch (e) {
    failure(`Caught error: ${e.message}`);
  }
}

export default Blog;
