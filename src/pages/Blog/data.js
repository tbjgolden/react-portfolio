export default [
  '',
  `
  @font-face {
    font-family: Product Sans;
    src: local("Product Sans"),
         url(https://cdn.rawgit.com/psingl/product-sans-font/2d5f16e4/Product%20Sans%20Regular.ttf);
    font-weight: normal;
  }
  @font-face {
    font-family: Product Sans Bold;
    src: local("Product Sans Bold"),
         url(https://cdn.rawgit.com/psingl/product-sans-font/2d5f16e4/Product%20Sans%20Bold.ttf);
    font-weight: 600;
  }
  .Blog * {
    letter-spacing: normal !important;
    color: #828286 !important;
  }
  body {
    font-family: 'Product Sans', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  }
  .Blog h1, .Blog h2, h3, h4, h5, h6 {
    letter-spacing: .05ex !important;
  }
  .Blog-title::after {
    content: 'gBlogs';
  }
  .Blog-subtitle::after {
    content: 'Ask more from your blog.';
  }
  .Blog .Jumbotron .App-row {
    background: #fff;
  }
  .Blog strong {
    font-weight: inherit;
    border-bottom: .2ex solid #aaa;
  }
  .Blog-panic-button {
    background: #fff;
    border: 2px solid;
    border-radius: 4px;
  }
  #blog-container > .App-row:nth-child(2n-1) {
    background: #e3f2fd;
  }
  #blog-container > .App-row:nth-child(2n-1) * {
    color: #002c60 !important;
  }
  #blog-container > .App-row:nth-child(2n-1) pre,
  #blog-container > .App-row:nth-child(2n-1) code,
  #blog-container > .App-row:nth-child(2n-1) th {
    background-color: #dbefff;
  }
  #blog-container > .App-row:nth-child(2n) {
    background: #ffdcc4;
  }
  #blog-container > .App-row:nth-child(2n) * {
    color: #a30000 !important;
  }
  #blog-container > .App-row:nth-child(2n) pre,
  #blog-container > .App-row:nth-child(2n) code,
  #blog-container > .App-row:nth-child(2n) th {
    background-color: #ffc59e;
  }
  .Header {
    filter: invert(1);
  }
  .Header-menu-button,
  .Header-logo,
  .Header-cart-button {
    color: #7d7d79;
  }
  .Header-menu-button::before,
  .Header-menu-button::after,
  .Header-logo::after {
    background-color: #7d7d79;
  }
  .Header-cart-button::before,
  .Header-cart-button::after {
    border-color: #7d7d79;
  }
  .Header-menu-button::before,
  .Header-menu-button::after {
    height: 2px;
    transform-origin: 54% 50%;
  }
  .Header-cart-button::before {
    border-top-width: 2px;
    border-left-width: 2px;
    border-right-width: 2px;
  }
  .Header-cart-button::after {
    border-width: 2px;
  }
  .Footer {
    background: #fff;
  }
  `
];
