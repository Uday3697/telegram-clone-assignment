import { useEffect, useState } from "react";
import { getAllChats } from "../utils/api";
import "./ChatList.css";
interface Chat {
  id: number;
  creator: {
    name: string | null;
    email: string;
  };
  unread_count?: number;
}

const ChatList = () => {
  const [chats, setChats] = useState<Chat[]>([]);

  useEffect(() => {
    const fetchChats = async () => {
      const data = await getAllChats(1);
      setChats(data);
    };

    fetchChats();
  }, []);

  return (
    <div >
      {/* <div className="chat-container"> */}

      <div className="chat-list">
        {chats.map((chat) => (
          <div className="chat-item" key={chat.id}>
            <div className="chat-item-left">
              <div className="chat-avatar">
                {/* Add avatar placeholder or component */}
              </div>
              <div className="chat-info">
                <div className="chat-name">
                  {chat.creator.name || chat.creator.email}
                </div>
                <div className="chat-last-message">Chat ID: {chat.id}</div>
              </div>
            </div>
            <div className="chat-item-right">
              {chat.unread_count && (
                <div className="unread-count">{chat.unread_count}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default ChatList;
