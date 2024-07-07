import React, { useEffect, useState } from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import { getAllChats } from "../utils/api";

interface Chat {
  id: number;
  creator: {
    name: string | null;
    email: string;
  };
}

const ChatList: React.FC = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const data = await getAllChats(1);
      setChats(data);
    };

    fetchChats();
  }, []);

  return (
    <List>
      {chats.map((chat) => (
        <ListItem key={chat.id}>
          <ListItemText
            primary={chat.creator.name || chat.creator.email}
            secondary={`Chat ID: ${chat.id}`}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ChatList;
