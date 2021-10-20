import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Accordion } from "react-bootstrap";
import axios from "axios";

import { LoginContext } from "../context/LoginContext";

const dummySquads = [
  { name: "Squad Name", members: ["David", "Jaya", "Jess"] },
  { name: "New Squad", members: ["Gina", "Jaya", "Jess"] },
];

function Squad() {
  const [squads, setSquads] = useState([]);

  const loginContext = useContext(LoginContext);

  useEffect(() => {
    async function getSquads() {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/squads`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };
      let results = await axios(config);
      console.log(results.data);
      setSquads(results.data);
    }
    getSquads();
  }, []);

  return (
    <div className="squadPage">
      <Link to="/createSquad">
        <Button variant="green">Create Squad</Button>
      </Link>
      <Accordion>
        {dummySquads.map((squad, idx) => (
          <Accordion.Item eventKey={idx}>
            <Accordion.Header>{squad.name}</Accordion.Header>
            <Accordion.Body>
              {squad.members.map((member) => (
                <p>{member} </p>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Squad;
