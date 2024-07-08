import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import MobileChat from "../components/MobileChat";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

import darkBg from "../assets/darkbg.webp"
import lightBg from "../assets/lightbg.jpg"




const Home: React.FC = () => {
  const theme = useTheme();
  const { theme: customTheme } = useCustomTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const background = customTheme === "dark" ? darkBg : lightBg;

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      {isMobile ? (
        <MobileChat />
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <ChatList />
          <Box sx={{
            flex: 3, overflowY: "auto", backgroundImage: background, backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }} >
            <ChatWindow />
          </Box>
        </div>
      )}
    </Box>
  );
};

export default Home;
