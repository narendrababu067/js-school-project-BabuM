import React from 'react';
import type { SocialMediaEvent } from '../types';

interface EventMarkerProps {
  event: SocialMediaEvent;
  position: 'left' | 'right';
  onClick: () => void;
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, position, onClick }) => {
  return (
    <div className={`timeline-item ${position}`} onClick={onClick}>
      <div className="timeline-content">
        <time>{event.year}</time>
        <figure>
          <img src={event.imageURL} alt={event.title} />
          <figcaption>{event.title}</figcaption>
        </figure>
        <p>{event.description}</p>
      </div>
    </div>
  );
};

export default EventMarker;
