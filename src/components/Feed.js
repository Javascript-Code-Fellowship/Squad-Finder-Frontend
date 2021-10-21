import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Iframe from 'react-iframe';

function Feed() {

  const [gridLayout, setGridLayout] = useState(true);
  const grid = "https://www.feedspot.com/widgets/lookup/cuVQ7aa19dce";
  const list = "https://www.feedspot.com/widgets/lookup/770acd12cwoR";

  const toggleLayout = () => {
    setGridLayout(!gridLayout)
  }

  return (
    <>
        <Iframe url="https://www.feedspot.com/widgets/lookup/e0667addcurB"
        id="hero"
        frameborder="0"
        width="100%"
        height="100%"
        scrolling="no"
        />

        <div>
          <Button onClick={toggleLayout}>{gridLayout ? 'SHOW AS LIST' : 'SHOW AS GRID'}</Button>
        </div> 

        <Iframe url={gridLayout ? grid : list}
        id="articles"
        frameborder="0"
        width="100%"
        height="100%"
        scrolling="no"
          />     
    </>
  );
}

export default Feed
