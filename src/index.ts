import { getEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";
import { initThemeToggle } from "./theme.js";

document.addEventListener("DOMContentLoaded", () => {
  initThemeToggle();
  const events = getEvents();
  renderTimeline(events);
});
