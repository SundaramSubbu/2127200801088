import React from 'react';

function TrainItem({ train }) {
  return (
    <li>
      <h3>{train.name}</h3>
      <p>Departure Time: {train.departureTime}</p>
      <p>Destination: {train.destination}</p>
    </li>
  );
}

export default TrainItem;