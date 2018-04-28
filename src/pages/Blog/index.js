import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NotFound from '../NotFound';
import BlogPost from './BlogPost';
import AllPosts from './AllPosts';
import Jumbotron from '../../Jumbotron';
import { styleSheets, posts } from './data';
import './index.scss';

let styleSheet = 0;

class Blog extends Component {
  toggleStyle () {
    styleSheet = ((styleSheet || 0) + 1) % styleSheets.length;
    this.forceUpdate();
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
                <button className='Blog-panic-button' onClick={() => this.toggleStyle()} />
              </div>
            </div>
          </div>
        </Jumbotron>
        <Switch>
          <Route exact path={`/blog`} render={() => <AllPosts posts={posts} />} />
          {
            posts.map(post => (
              <Route
                key={post.date}
                exact
                path={`/blog/${post.url}`}
                render={() => <BlogPost {...post} />}
              />
            ))
          }
          <Route render={() => <NotFound />}/>
        </Switch>
        <style dangerouslySetInnerHTML={{ __html: styleSheets[styleSheet] }} />
      </div>
    );
  }
}

export default Blog;
