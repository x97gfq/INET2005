import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamPlayers = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000')
      .then(response => {
        setPlayers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>Team Players</h1>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Player Number</th>
            <th>Team Name</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.first_name}</td>
              <td>{player.last_name}</td>
              <td>{player.player_number}</td>
              <td>{player.team_name}</td>
              <td>{player.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamPlayers;