import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FromWho } from "../constants/chat";
import { setChatMessageModel } from "../helpers/chatMessage";
import {
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonFooter,
  IonIcon,
} from "@ionic/react";
// import axios from 'axios';
import ChatMessage from "../components/chat-message/ChatMessage";
import InputChat from "../components/input-chat/InputChat";
import "./ChatScreens.scss";

interface Message {
  id: string;
  text: string;
  fromWho: FromWho;
  imageUrl?: string;
}

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [messageText, setMessageText] = useState("");
  const [lastUserMessage, setLastUserMessage] = useState("");

  const sendBotResponse = async () => {
    try {
      const apiResponse = await axios.get("https://yesno.wtf/api");
      if (apiResponse.status === 200) {
        const botMessageApi = setChatMessageModel(apiResponse.data);
        console.log("apiResponse", botMessageApi);
        const newBotMessage: Message = {
          id: `me-${messages.length + 1}`,
          text: botMessageApi.text,
          fromWho: FromWho.Hers,
          imageUrl: botMessageApi.imageUrl,
        };
        setMessages([...messages, newBotMessage]);
      }
    } catch (error) {
      console.error("Error al obtener respuesta de la API:", error);
    }
  };

  useEffect(() => {
    // Verifica si el último mensaje del usuario termina en "?"
    if (lastUserMessage.endsWith("?")) {
      sendBotResponse();
    }
    // Limpia el mensaje
    setLastUserMessage("");
  }, [lastUserMessage, messages]);

  const sendMyMessages = () => {
    const newMyMessage: Message = {
      id: `me-${messages.length + 1}`,
      text: messageText,
      fromWho: FromWho.Me,
    };
    setMessages([...messages, newMyMessage]);
    setLastUserMessage(messageText);
    setMessageText("");
  };

  const handleSendMessage = () => {
    if (messageText.trim() === "") return;
    sendMyMessages();
  };

  return (
    <IonContent>
      <IonList className="list-messages">
        {messages.map((message) => (
          <ChatMessage
            key={message.id}
            text={message.text}
            fromWho={message.fromWho}
            imageUrl={message.imageUrl}
          />
        ))}
      </IonList>
      <InputChat
        handleSendMessage={handleSendMessage}
        messageText={messageText}
        onIonChange={(e) => setMessageText(e.detail.value!)}
      />
    </IonContent>
  );
};

export default ChatScreen;
