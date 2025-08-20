import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import type { SocialMediaEvent } from './types';
import './App.css';

const App: React.FC = () => {
  const [events, setEvents] = useState<SocialMediaEvent[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<SocialMediaEvent | null>(null);

  useEffect(() => {
    fetch('/events.json')
      .then(res => res.json())
      .then((data: SocialMediaEvent[]) => setEvents(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Header />
      <main>
        <section id="timeline">
          <h1>History of Popular Social Media Platforms</h1>
          <Timeline events={events} onSelectEvent={setSelectedEvent} />
        </section>
      </main>
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  );
};

export default App;
