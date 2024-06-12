import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  return (
    <Form.Check
      type="switch"
      id="dark-mode-switch"
      label="Dark Mode"
      checked={darkMode}
      onChange={() => setDarkMode(prevMode => !prevMode)}
    />
  );
};

export default DarkModeToggle;
