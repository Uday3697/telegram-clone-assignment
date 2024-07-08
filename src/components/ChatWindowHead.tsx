import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "../context/ThemeContext";
import { FaPhone, FaEllipsisV } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi';
import Avatar from '@mui/material/Avatar';

const ChatWindowHead: React.FC = () => {
    const { theme } = useTheme();

    return (
        <Box
            sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: theme === 'light' ? '#f5f5f5' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
                height: "56px"
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '1rem',
                    backgroundColor: theme === 'light' ? '#fff' : '#444',
                    color: theme === 'light' ? '#000' : '#fff',
                    borderBottom: '1px solid #ccc',
                }}
            >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar alt="User Name" src="/static/images/avatar/1.jpg" />
                    <Typography variant="h6" sx={{ marginLeft: '0.5rem' }}>
                        User Name
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <FiSearch style={{ fontSize: '1.5rem', marginRight: '1rem' }} />
                    <FaPhone style={{ fontSize: '1.5rem', marginRight: '1rem' }} />
                    <FaEllipsisV style={{ fontSize: '1.5rem' }} />
                </Box>
            </Box>

        </Box>
    );
};


export default ChatWindowHead