import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Squad() {
  return (
    <div>
      <Link to="/createSquad">
        <Button>Create Squad</Button>
      </Link>
      Hello World
    </div>
  );
}

export default Squad;
