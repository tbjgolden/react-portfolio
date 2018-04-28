import React from 'react';
import Columns from './Columns';
import { routes } from './Header';
import { posts } from './pages/Blog/data';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = ({ isAndroid }) => {
  return (
    <footer className='Footer'>
      <div className='App-row-sizer'>
        <div className='Footer-top'>
          <Columns>
            <div>
              <div>Pages</div>
              <div><Link to='/'>Home</Link></div>
              { routes.map(({ title, url }) => <div key={url}><Link to={url}>{title}</Link></div>)}
            </div>
            <div>
              <div>Recent Posts</div>
              {
                posts.slice(0, Math.min(3, posts.length)).map(({ title, url }) => (
                  <div key={title}><Link to={`/blog/${url}`}>{title}</Link></div>
                ))
              }
            </div>
            <div>
              <div>About This Site</div>
              <div>This website was written using React.</div>
              <div>There is a lot of fun stuff going on under the surface.</div>
            </div>
            <div>
              <div>Friends</div>
              {
                [
                  ['Aaron Conway', 'https://aaronconway.co.uk', 'Aaron is an amazing designer'],
                  ['Jamie Mahoney', 'https://mahoneyj2.github.io/', 'Jamie is an amazing programmer']
                ].map(([text, address, description]) => (
                  <div key={text}>
                    <div>
                      <a href={address} target='_blank' rel='noopener noreferrer'>
                        {text}
                      </a>
                    </div>
                    <div>
                      {description}
                    </div>
                  </div>
                ))
              }
            </div>
            <div>
              <div>Disclaimer</div>
              <div>
                This website may or may not be inspired by an entity named after a
                <span className='Footer-named-after' />.
              </div>
            </div>
          </Columns>
        </div>
        <small>
          Copyright &copy; {(new Date()).getFullYear()} TomGolden. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
