import React from "react";
import { IonCard, IonCardContent, IonImg, IonSpinner } from "@ionic/react";

import { FromWho } from "../constants/chat";

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
    <IonCard className={`message-card ${containerStyle}`}>
      <IonCardContent>
        {text}
        {fromWho === FromWho.Hers && imageUrl && (
          <IonImg
            className="message-image"
            src={imageUrl}
            alt="Image"
            fallbackSrc={<IonSpinner />}
          />
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default ChatMessage;
