import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import Iframe from 'react-iframe';

function Articles() {

  const [gridLayout, setGridLayout] = useState(true);
  const grid = "https://www.feedspot.com/widgets/lookup/cuVQ7aa19dce";
  const list = "https://www.feedspot.com/widgets/lookup/770acd12cwoR";

  const toggleLayout = () => {
    setGridLayout(!gridLayout)
  }

  return ( 
    <div>
      <div className="feedLayout">
        <Button onClick={toggleLayout} className="showGrid">{gridLayout ? "SHOW AS LIST" : "SHOW AS GRID"}</Button>
      </div>
        <Iframe className="hero" url={gridLayout ? grid : list}
        id="hero"
        frameborder="0"
        width="98%"
        height="2000px"
        scrolling="no"
        />
    </div>
  );
}

export default Articles;