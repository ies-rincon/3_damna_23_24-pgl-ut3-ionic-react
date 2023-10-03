import React from "react";
import { FromWho } from "../../constants/chat";
import {
  IonContent,
  IonCardContent,
  IonImg,
  IonItem,
  IonLabel,
  IonSpinner,
} from "@ionic/react";
import "./ChatMessage.scss";

interface ChatMessageProps {
  text: string;
  fromWho: FromWho;
  imageUrl?: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  text,
  fromWho,
  imageUrl,
}) => {
  const containerStyle =
    fromWho === FromWho.Me ? "user-container" : "bot-container";
  const textStyle = fromWho === FromWho.Me ? "user-text" : "bot-text";

  return (
    <IonItem className={`container ${containerStyle}`}>
      <IonLabel className={textStyle}>{text}</IonLabel>
      {fromWho === FromWho.Hers && imageUrl && (
        <IonImg
          className="message-image"
          src={imageUrl}
          alt="Image"
          fallbackSrc={<IonSpinner name="circular" />}
        />
      )}
    </IonItem>
  );
};

export default ChatMessage;
