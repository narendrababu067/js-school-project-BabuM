
**Goal / Scope**

The main goal of this project is to improve an existing social media timeline web app using TypeScript. This will include adding static typing and organizing the code better.

Make sure to convert all JavaScript to TypeScript (.ts) with strict type checking.

Divide the code into ES modules for easier maintenance. Examples include fetcher.ts, renderer.ts, modal.ts, and theme.ts.

Set up build scripts to compile TypeScript into JavaScript in a dist/ folder.

Keep the original functionality, which includes a vertical timeline with alternating left and right cards, clickable modals, and a light/dark theme toggle.

Check that the compiled JavaScript works correctly in the browser.

**Main Changes**

**TypeScript Integration**

- Added tsconfig.json with strict mode turned on.
- Converted script.js to src/index.ts.
- Introduced interfaces and types for timeline events.

**Modular Code Structure**

- Created separate modules:
  - fetcher.ts: fetch or define timeline events.
  - renderer.ts: render timeline cards dynamically.
  - modal.ts: manage modal open/close functionality.
  - theme.ts: manage light/dark theme toggle.

**Build & Output**

- Added npm scripts:
  - build: compile TypeScript to JavaScript.
  - watch: auto-compile on changes.
  - start: compile and serve the project locally.

The compiled JavaScript is output to the dist/ folder, which the browser will use.

**Browser Verification**

The timeline still shows the left and right alternating cards.

Modals open correctly when clicked.

The theme toggle works.


How to Run

Clone the repository

git clone https://github.com/narendrababu067/js-school-project-BabuM.git  
cd js-school-project-BabuM

Install dependencies

npm install

Build the TypeScript code

npm run build

This compiles all .ts files from src/ into JavaScript in the dist/ folder.

Start a local server

npm start

This runs the build again and serves the project using serve.

Open your browser at the URL shown in the terminal (for example, http://localhost:3000 or another port if 3000 is busy).




