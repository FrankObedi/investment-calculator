# Investment Calculator

A modern, responsive React app for visualizing compound investment growth over time.

## Features

- **Interactive Inputs:**  
  Enter initial investment, annual investment, expected return, and duration.
- **Live Results Table:**  
  See year-by-year breakdown of investment value, yearly interest, total interest, and invested capital.
- **Responsive Design:**  
  Looks great on desktop and mobile.
- **Accessible & User-Friendly:**  
  Clean layout, clear labels, and keyboard-friendly inputs.

## Technologies Used

- **React** (with functional components and hooks)
- **CSS** (custom properties, gradients, and responsive layout)
- **JavaScript** (ES6+)
- **Vite** (for development/build, depending on setup)

## How It Works

1. **User Input:**  
   Enter your investment parameters in the form.
2. **Calculation:**  
   The app calculates compound growth for each year based on your inputs.
3. **Results Table:**  
   View a detailed table showing how your investment grows annually.

## Project Structure

```
src/
  components/
    Header.jsx
    UserInput.jsx      // Input form for investment parameters
    Results.jsx        // Table displaying calculation results
  util/
    investment.js      // Calculation logic and formatting
  index.css            // Global styles and color scheme
  App.jsx              // Main app component
```

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the app:**
   ```bash
   npm run dev
   ```

3. **Open in your browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Customization

- **Colors:**  
  Easily adjust the color scheme in `src/index.css` using CSS variables.
- **Calculation Logic:**  
  Modify or extend investment calculations in `src/util/investment.js`.
