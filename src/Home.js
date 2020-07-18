import React from 'react';
import tags from './tags.json';
import Tags from './Tags';

function Home() {
  return <Tags tags={tags} />;
}

export default Home;
