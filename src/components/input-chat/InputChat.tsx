import {
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonButton,
  IonFooter,
  IonIcon,
} from "@ionic/react";
import { send } from "ionicons/icons"; // Importa el ícono de enviar de Ionicons

import "./InputChat.scss";

interface InputProps {
  messageText: string;
  handleSendMessage: () => void;
  onIonChange: (e: any) => void;
}

const InputChat: React.FC<InputProps> = ({
  messageText,
  handleSendMessage,
  onIonChange,
}) => {
  return (
    <IonFooter className="input-chat">
      <IonItem>
        <IonInput
          placeholder="End your message with a '?'"
          value={messageText}
          onIonChange={onIonChange}
        />
        <IonButton onClick={handleSendMessage}>
          <IonIcon icon={send} slot="icon-only" />
        </IonButton>
      </IonItem>
    </IonFooter>
  );
};

export default InputChat;
