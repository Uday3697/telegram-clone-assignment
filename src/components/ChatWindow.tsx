import React from 'react';
import { useTheme as useCustomTheme } from '../context/ThemeContext';
import img from "../../public/darkbg.webp"
import dark from "../../public/darkbg.webp"
const ChatWindow: React.FC = () => {
  const { theme } = useCustomTheme();

  const backgroundImage = theme === 'dark' ? dark : img;

  return (
    <div
      style={{
        height: '800px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        margin: 'auto',
      }}
    >
      ChatWindow  theme
    </div>
  );
};

export default ChatWindow;
