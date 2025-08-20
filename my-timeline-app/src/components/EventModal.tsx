import React from 'react';
import ReactDOM from 'react-dom';
import type { SocialMediaEvent } from '../types';

interface EventModalProps {
  event: SocialMediaEvent | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;
  const modalRoot = document.getElementById('modal-root') as HTMLElement;

  return ReactDOM.createPortal(
    <div className="modal" style={{ display: 'block' }}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <img src={event.imageURL} alt={event.title} />
        <h2>{event.title}</h2>
        <p>{event.year}</p>
        <p>{event.description}</p>
        <p>{event.category}</p>
      </div>
    </div>,
    modalRoot
  );
};

export default EventModal;
