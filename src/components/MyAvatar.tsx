import React from "react";
import {
  IonCol,
  IonGrid,
  IonHeader,
  IonImg,
  IonRow,
  IonToolbar,
  IonTitle,
  IonAvatar,
} from "@ionic/react";

interface HeaderProps {
  title: string;
  avatarSource: string;
}

const Header: React.FC<HeaderProps> = ({ title, avatarSource }) => {
  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonGrid>
          <IonRow class="ion-justify-content-start">
            <IonCol size="2">
              <IonAvatar>
                <IonImg src={avatarSource} alt="Avatar" />
              </IonAvatar>
            </IonCol>
            <IonCol class="ion-align-self-center">
              <IonTitle>{title}</IonTitle>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
