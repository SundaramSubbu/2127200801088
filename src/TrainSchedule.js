import React from 'react';
import TrainItem from './TrainItem';

function TrainSchedule() {
  const trains = [
    { id: 1, name: 'Train A', departureTime: '08:00 AM', destination: 'City X' },
    { id: 2, name: 'Train B', departureTime: '09:30 AM', destination: 'City Y' },
    
  ];

  return (
    <div>
      <h2>Upcoming Trains</h2>
      <ul>
        {trains.map(train => (
          <TrainItem key={train.id} train={train} />
        ))}
      </ul>
    </div>
  );
}

export default TrainSchedule;
