## Goal / Scope
Rebuild the UI as a React application using Vite with TypeScript to create a modular, maintainable, and dynamic interface. This task migrates the existing timeline UI into reusable React components and sets up state management using hooks.

## Main changes
- Bootstrapped project using **Vite (React + TypeScript template)**.  
- Added core components:  
  - `<Header>`: logo and theme switch.  
  - `<Timeline>`: renders events dynamically.  
  - `<EventMarker>`: displays year/title dots.  
  - `<EventModal>`: detailed view using React Portal.  
  - *(Optional)* `<FilterPanel>` placeholder for future filters/bookmarks.  
- Implemented **state with useState/useEffect** for loading event data and controlling modal visibility.  
- Preserved styling by importing existing CSS. Future migration to CSS Modules or styled-components is possible.  

## How to test
1. Clone the repository and checkout the `feature/task-5` branch.  
2. Install dependencies:
   ```bash
   npm install
   ```  
3. Run the development server:
   ```bash
   npm run dev
   ```  
4. Open the given localhost in your browser.
