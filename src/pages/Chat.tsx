import {
  IonContent,
  IonHeader,
  IonPage,
  // IonStatusBar,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Header from "../components/MyAvatar"; // Asegúrate de importar tu componente de encabezado
import Footer from "../components/Footer"; // Asegúrate de importar tu componente de pie de página
import ChatScreens from "../screens/ChatScreens";
import "./Chat.css";

const Chat: React.FC = () => {
  return (
    <IonPage>
      {/* <IonStatusBar /> */}
      <Header
        title="Love Chat 💗"
        avatarSource="https://randomuser.me/api/portraits/women/79.jpg"
      />
      <IonContent fullscreen>
        <ChatScreens />
      </IonContent>
      <Footer text="© 2023 YES NO app" />
    </IonPage>
  );
};

export default Chat;
