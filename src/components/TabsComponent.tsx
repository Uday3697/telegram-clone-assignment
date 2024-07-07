import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabsComponent() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                sx={{
                    '& .MuiTabs-flexContainer': {
                        '& .MuiTab-root': {
                            fontSize: '10px',  // Set font size to 12px
                            minWidth: 'unset', // Remove minimum width for compact style
                            padding: '6px 12px', // Adjust padding for compactness
                        },
                    },
                }}
                onChange={handleChange}
                value={value}
                aria-label="Tabs where each tab needs to be selected manually"
            >
                <Tab label="Chats" />
                <Tab label="Channel" />
                <Tab label="Media" />
                <Tab label="Links" />
                <Tab label="Files" />
                <Tab label="Music" />
                <Tab label="Voice" />
            </Tabs>
        </Box>
    );
}
