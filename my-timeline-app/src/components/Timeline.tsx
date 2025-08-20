import React from 'react';
import type { SocialMediaEvent } from '../types';
import EventMarker from './EventMarker';

interface TimelineProps {
  events: SocialMediaEvent[];
  onSelectEvent: (event: SocialMediaEvent) => void;
}

const Timeline: React.FC<TimelineProps> = ({ events, onSelectEvent }) => {
  return (
    <div>
      {events.map((event, idx) => (
        <EventMarker
          key={idx}
          event={event}
          position={idx % 2 === 0 ? 'left' : 'right'}
          onClick={() => onSelectEvent(event)}
        />
      ))}
    </div>
  );
};

export default Timeline;
