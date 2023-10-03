import React from "react";
import { IonFooter, IonToolbar, IonTitle } from "@ionic/react";

interface FooterProps {
  text: string;
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <IonFooter>
      <IonToolbar color="primary">
        <IonTitle className="ion-text-center" size="small">
          {text}
        </IonTitle>
      </IonToolbar>
    </IonFooter>
  );
};

export default Footer;
