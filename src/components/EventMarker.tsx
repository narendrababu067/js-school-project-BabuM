import React from 'react';
import type { SocialMediaEvent } from '../types';

interface EventMarkerProps {
  event: SocialMediaEvent;
  position: 'left' | 'right';
  onClick: () => void;
  isActive: boolean;
}

const EventMarker: React.FC<EventMarkerProps> = ({ event, position, onClick, isActive }) => {
  return (
    <div
      className={`timeline-item ${position}`}
      role="button"
      tabIndex={0}
      aria-current={isActive ? 'step' : undefined}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
          const next = (e.currentTarget.nextElementSibling as HTMLElement) || e.currentTarget;
          next.focus();
        }
        if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
          const prev = (e.currentTarget.previousElementSibling as HTMLElement) || e.currentTarget;
          prev.focus();
        }
      }}
    >
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
