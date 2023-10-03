import React from "react";
import { FromWho } from "../../constants/chat";
import {
  IonCol,
  IonContent,
  IonCardContent,
  IonImg,
  IonItem,
  IonText,
  IonLabel,
  IonGrid,
  IonRow,
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
    fromWho === FromWho.Me
      ? "container user-container ion-text-end"
      : "container bot-container ion-text-start";
  return (
    <IonItem>
      <IonGrid className={containerStyle}>
        <IonRow>
          <IonCol>
            <IonLabel color="light">{text}</IonLabel>
            {fromWho === FromWho.Hers && imageUrl && (
              <IonImg
                className="image"
                src={imageUrl}
                alt="Image"
                fallbackSrc={<IonSpinner name="circular" />}
              />
            )}
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonItem>
  );
};

export default ChatMessage;
