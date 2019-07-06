import React from 'react';
import { Helmet } from 'react-helmet';

const About = () => (
  <div className="About">
    <Helmet>
      <title>About</title>
      <meta charSet="utf-8" name="description" content="We are building a super lightweight react boilerplate using webpack" />
    </Helmet>
    About Page
  </div>
);

export default About;
