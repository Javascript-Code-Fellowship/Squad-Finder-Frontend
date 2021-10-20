import axios from 'axios';
import React, { useEffect, useState } from 'react';

export const SquadContext = React.createContext();

function SquadsContext(props) {

  const [userSquads, setUserSquads] = useState([]);
  const [currentSquad, setCurrentSquad] = useState({});
  const [requestConfig, setRequestConfig] = useState({});

  let state = {
    userSquads,
    currentSquad,
    requestConfig,
    setUserSquads,
    setCurrentSquad,
    setRequestConfig,
  };

  useEffect(() => {
    let getInitial = {
      headers: { Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5hbWUiLCJpYXQiOjE2MzQ2ODY2ODh9.nruHvb1bfCYn51_Eh1WO6qnl1q8IasHJjf1Jv4wbU80` },
      method: 'get',
      url: 'https://squadfinderapp.herokuapp.com/squads',
    }

    axios(getInitial)
      .then( (response) => {
        setUserSquads(response.data.squads);
        console.log("squad context: ", response.data.squads)
      })
  }, []);

  return (
    <SquadContext.Provider value={state}>
      {props.children}
    </SquadContext.Provider>
  );

}

export default SquadsContext;