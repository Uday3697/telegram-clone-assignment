import React from "react";
import { Box } from "@mui/material";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";

const Home: React.FC = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <Box sx={{ display: "flex", flex: 1 }}>
        <ChatList />
        <ChatWindow />
      </Box>
    </Box>
  );
};

export default Home;
