# react-redux-webpack-boilerplate
This is a react/redux boilerplate starter with webpack &amp; babel

React
Redux
React-Router V4
Redux

TODO:
Jest/Enzyme
SEO
Prettier/Eslint

# React Redux Webpack Boilerplate

---

## Features

This react boilerplate contains the following features:

* [React](https://github.com/facebook/react)
* [React Router](https://github.com/rackt/react-router)
* [Babel](http://babeljs.io) for ES6 and ES7 magic
* [Webpack](http://webpack.github.io) for bundling
* [Webpack Hot Middleware](https://github.com/glenjamin/webpack-hot-middleware)
* [Redux](https://github.com/rackt/redux)'s futuristic [Flux](https://facebook.github.io/react/blog/2014/05/06/flux.html) implementation
* [Redux Dev Tools](https://github.com/gaearon/redux-devtools) support
<!-- * [ESLint](http://eslint.org) to maintain a consistent code style -->
* [style-loader](https://github.com/webpack/style-loader), [sass-loader](https://github.com/jtangelder/sass-loader) to allow import of stylesheets in plain css and sass
<!-- * [font-awesome-webpack](https://github.com/gowravshekar/font-awesome-webpack) to customize Bootstrap and FontAwesome -->
<!-- * [react-helmet](https://github.com/nfl/react-helmet) to manage title and meta tag information on both server and client -->

## Installation

```bash
npm install # install all the boilerplate dependencies
```

## Running Dev Server

```bash
npm run start # local webpack-dev-server with hot reloading
```

Start rapidly developing using the command above.

## Build Production

```bash
npm run build
```

This command will output your built web app in ```dist/``` folder. Thereafter you can copy and paste the contents of this folder to any static web host such as, [godaddy](https://godaddy.com), [hostpapa](https://hostpapa.com) into the public/root directory.
**It. Just. Works.**

If you would like to deploy to **modern web hosts**, it's even **easier**.

## Deployment on Surge.sh
---

 **Pre-requiste:** Build Production first (to generate dist folder)

### Install Surge CLI Globally
```bash
npm install --g surge
```

### Deploy
In your project directory just run:
```bash
surge -p dist
```

After which you will be shown your project & domain name. 
Hit ```Enter``` and it will build and deploy in a jiffy.



## Deployment on Heroku
 
---

TODO

## Deployment on Netlify
 
---

TODO

### Using Redux DevTools

[Redux Devtools](https://github.com/gaearon/redux-devtools) are enabled by default in development.

If you have the [Redux DevTools chrome extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) installed it will automatically detect and you can start using it straight away.

<!-- DevTools are not enabled during production. -->



## Demo

A demonstration of this app can be seen [running on surge](http://boilerplate-redux.surge.sh)
<!-- , which is a deployment of the [netlify branch](https://github.com/erikras/react-redux-universal-hot-example/tree/heroku). -->


<!-- #### Images

Now it's possible to render the image both on client and server. Please refer to issue [#39](https://github.com/erikras/react-redux-universal-hot-example/issues/39) for more detail discussion, the usage would be like below (super easy):

```javascript
let logoImage = require('./logo.png');
``` -->

<!-- #### Styles

This project uses [local styles](https://medium.com/seek-ui-engineering/the-end-of-global-css-90d2a4a06284) using [css-loader](https://github.com/webpack/css-loader). The way it works is that you import your stylesheet at the top of the `render()` function in your React Component, and then you use the classnames returned from that import. Like so:

```javascript
render() {
const styles = require('./App.scss');
...
```

Then you set the `className` of your element to match one of the CSS classes in your SCSS file, and you're good to go!

```jsx
<div className={styles.mySection}> ... </div>
``` -->

<!-- ## Deployment on Heroku -->
 
---
Thanks for checking this out.

– Kaiz Hudda, [@kaizhudda](https://twitter.com/kaizhudda)


