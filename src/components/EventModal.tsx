import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import type { SocialMediaEvent } from '../types';

interface EventModalProps {
  event: SocialMediaEvent | null;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const lastFocusedElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!event) return;

    lastFocusedElement.current = document.activeElement as HTMLElement;

    const focusableElements = modalRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    focusableElements?.[0]?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();

      if (e.key === 'Tab' && focusableElements && focusableElements.length > 0) {
        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      lastFocusedElement.current?.focus();
    };
  }, [event, onClose]);

  if (!event) return null;

  const modalRoot = document.getElementById('modal-root')!;
  return ReactDOM.createPortal(
    <div
      className="modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-desc"
      ref={modalRef}
    >
      <div className="modal-content">
        <button className="close" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <img src={event.imageURL} alt={event.title} />
        <h2 id="modal-title">{event.title}</h2>
        <p id="modal-desc">
          <strong>Year:</strong> {event.year}
          <br />
          {event.description}
          <br />
          <strong>Category:</strong> {event.category}
        </p>
      </div>
    </div>,
    modalRoot
  );
};

export default EventModal;
