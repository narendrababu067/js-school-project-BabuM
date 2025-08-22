# Accessibility Improvements for My-Timeline-App

## Timeline Markers
- Added role="button" for screen readers.
- tabIndex="0" ensures keyboard focus.
- aria-current="step" marks the active timeline event.
- Implemented arrow key navigation (Left/Right, Up/Down).

## Modal
- Implemented role="dialog" and aria-modal="true".
- Added aria-labelledby and aria-describedby.
- Created a focus trap inside the modal.
- The modal closes with the Escape key.
- Returns focus to the last focused element after closing.

## Theme & Colors
- The light/dark theme toggle maintains contrast (WCAG AA ≥ 4.5:1).

## General
- All interactive elements are accessible via keyboard.
- Images have alt text for screen readers.