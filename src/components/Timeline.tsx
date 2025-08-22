import React from 'react';
import type { SocialMediaEvent } from '../types';
import EventMarker from './EventMarker';

interface TimelineProps {
  events: SocialMediaEvent[];
  onSelectEvent: (event: SocialMediaEvent) => void;
  selectedEvent: SocialMediaEvent | null;
}

const Timeline: React.FC<TimelineProps> = ({ events, onSelectEvent, selectedEvent }) => {
  return (
    <div id="timeline">
      {events.map((event, idx) => (
        <EventMarker
          key={idx}
          event={event}
          position={idx % 2 === 0 ? 'left' : 'right'}
          onClick={() => onSelectEvent(event)}
          isActive={selectedEvent?.title === event.title}
        />
      ))}
    </div>
  );
};

export default Timeline;
