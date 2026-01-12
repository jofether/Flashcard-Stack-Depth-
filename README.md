# Flashcard Stack (Depth)

A React-based flashcard study application featuring a 3D stacking effect using absolute positioning and CSS transforms. The layout tests the model's ability to interpret depth cues through visual layering.

## Project Structure

```
src/
  ├── App.jsx         # Main application component with flashcard stack UI
  ├── main.jsx        # React entry point
  └── index.css       # Tailwind CSS imports
index.html            # HTML template
package.json          # Project dependencies
vite.config.js        # Vite configuration
tailwind.config.js    # Tailwind CSS configuration
postcss.config.js     # PostCSS configuration
```

## Features

- **3D Card Stack**: Three layered cards with rotations and offsets creating a depth effect
- **Interactive Flashcard**: Top card displays questions with hover effects
- **Action Buttons**: Approve (✓) and reject (✕) buttons for study workflow
- **Responsive Design**: Built with Tailwind CSS for clean, modern styling

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser to the URL displayed in the terminal (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally

## Technologies

- **React** 18.3+ - UI library
- **Vite** 5.0+ - Build tool and dev server
- **Tailwind CSS** 3.4+ - Utility-first CSS framework
