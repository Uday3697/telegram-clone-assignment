import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import MobileChat from "../components/MobileChat";

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      {isMobile ? (
        <MobileChat />
      ) : (
        <div>
          <ChatList />
          <Box sx={{ flex: 3, overflowY: "auto" }}>
            <ChatWindow />
          </Box>
        </div>
      )}
    </Box>
  );
};

export default Home;
