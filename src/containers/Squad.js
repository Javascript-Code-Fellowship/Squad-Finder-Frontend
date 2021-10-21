import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Accordion } from "react-bootstrap";
import axios from "axios";
import { When } from "react-if";
import Member from "../components/Member";
import { LoginContext } from "../context/LoginContext";

const dummySquads = [
  { name: "Squad Name", squadmates: ["David", "Jaya", "Jess"] },
  { name: "New Squad", squadmates: ["Gina", "Jaya", "Jess"] },
];

function Squad() {
  const [squads, setSquads] = useState([]);
  const [loading, setLoading] = useState(true);
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    async function getSquads() {
      const config = {
        method: "get",
        url: `https://squadfinderapp.herokuapp.com/squads`,
        headers: { authorization: `Bearer ${loginContext.user.token}` },
      };
      let results = await axios(config);
      setSquads(results.data.squads);
      setLoading(false);
    }
    getSquads();
  }, [loginContext.user.token]);

  return (
    <div className="squadPage">
      <Link to="/createSquad">
        <Button variant="green">CREATE SQUAD</Button>
      </Link>
      <Accordion>
        {squads?.map((squad, idx) => (
          <Accordion.Item eventKey={idx}>
            <Accordion.Header>{squad.name}</Accordion.Header>
            <Accordion.Body>
              {squad.squadmates.map((member, idx) => (
                <When condition={!loading}>
                  <Member name={member} profilePhoto={member} />
                </When>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default Squad;
