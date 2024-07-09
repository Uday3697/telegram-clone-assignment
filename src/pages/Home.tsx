import React from "react";
import { Box, Grid, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import ChatList from "../components/ChatList";
import ChatWindow from "../components/ChatWindow";
import MobileChat from "../components/MobileChat";
import { useTheme as useCustomTheme } from "../context/ThemeContext";

import darkBg from "../assets/darkbg.webp";
import lightBg from "../assets/lightbg.jpg";

const Home: React.FC = () => {
  const theme = useTheme();
  const { theme: customTheme } = useCustomTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const background = customTheme === "dark" ? darkBg : lightBg;

  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      {isMobile ? (
        <MobileChat />
      ) : (
        <Grid container sx={{ height: "calc(100% - 56px)" }}>
          <Grid item xs={12} md={3}>
            <ChatList />
          </Grid>
          <Grid item xs={12} md={9}>
            <Box
              sx={{
                height: "100%",
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <ChatWindow />
            </Box>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default Home;
