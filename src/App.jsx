import { useState } from 'react';
import AppRoutes from './routes';
import { useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const TRANSITION_DURATION_GENERAL = 900;
  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return (
    <div
      className={`min-h-screen bg-bg dark:bg-bg-dark text-textSecondary dark:text-textSecondary-dark text-sm transition-all duration-${TRANSITION_DURATION_GENERAL} ease-in-out`}
    >
      {/* <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button> */}
      <main className="mx-auto px-1 max-w-[95%] 2xl:max-w-screen-2xl">
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
