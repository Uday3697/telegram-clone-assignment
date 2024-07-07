import axios from 'axios';

const API_BASE_URL = 'https://devapi.beyondchats.com/api';

export const getAllChats = async (page: number) => {
  const response = await axios.get(`${API_BASE_URL}/get_all_chats`, {
    params: { page }
  });
  return response.data.data.data; 
};

export const getChatMessages = async (chatId: number) => {
  const response = await axios.get(`${API_BASE_URL}/get_chat_messages`, {
    params: { chat_id: chatId }
  });
  return response.data.data; 
};
