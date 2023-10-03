import { IonGrid, IonRow, IonCol } from "@ionic/react";
import "./ExploreContainer.css";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div id="container">
      <IonGrid>
        <IonRow class="ion-justify-content-start">
          <IonCol size="3">
            <div>1 of 2</div>
          </IonCol>
          <IonCol size="3">
            <div>2 of 2</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-justify-content-center">
          <IonCol size="3">
            <div>1 of 2</div>
          </IonCol>
          <IonCol size="3">
            <div>2 of 2</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-justify-content-end">
          <IonCol size="3">
            <div>1 of 2</div>
          </IonCol>
          <IonCol size="3">
            <div>2 of 2</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-justify-content-around">
          <IonCol size="3">
            <div>1 of 2</div>
          </IonCol>
          <IonCol size="3">
            <div>2 of 2</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-justify-content-between">
          <IonCol size="3">
            <div>1 of 2</div>
          </IonCol>
          <IonCol size="3">
            <div>2 of 2</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-justify-content-evenly">
          <IonCol size="3">
            <div>1 of 2</div>
          </IonCol>
          <IonCol size="3">
            <div>2 of 2</div>
          </IonCol>
        </IonRow>
      </IonGrid>

      <IonGrid>
        <IonRow class="ion-align-items-start">
          <IonCol>
            <div>1 of 4</div>
          </IonCol>
          <IonCol>
            <div>2 of 4</div>
          </IonCol>
          <IonCol>
            <div>3 of 4</div>
          </IonCol>
          <IonCol>
            <div>4 of 4 # # #</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-align-items-end">
          <IonCol>
            <div>1 of 4</div>
          </IonCol>
          <IonCol>
            <div>2 of 4</div>
          </IonCol>
          <IonCol>
            <div>3 of 4</div>
          </IonCol>
          <IonCol>
            <div>4 of 4 # # #</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-align-items-center">
          <IonCol>
            <div>1 of 4</div>
          </IonCol>
          <IonCol>
            <div>2 of 4</div>
          </IonCol>
          <IonCol>
            <div>3 of 4</div>
          </IonCol>
          <IonCol>
            <div>4 of 4 # # #</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-align-items-baseline">
          <IonCol>
            <div>1 of 4</div>
          </IonCol>
          <IonCol>
            <div>2 of 4</div>
          </IonCol>
          <IonCol>
            <div>3 of 4</div>
          </IonCol>
          <IonCol>
            <div>4 of 4 # # #</div>
          </IonCol>
        </IonRow>

        <IonRow class="ion-align-items-stretch">
          <IonCol>
            <div>1 of 4</div>
          </IonCol>
          <IonCol>
            <div>2 of 4</div>
          </IonCol>
          <IonCol>
            <div>3 of 4</div>
          </IonCol>
          <IonCol>
            <div>4 of 4 # # #</div>
          </IonCol>
        </IonRow>
      </IonGrid>
      <strong>Ready to create an app?</strong>
      <p>
        Start with Ionic{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://ionicframework.com/docs/components"
        >
          UI Components
        </a>
      </p>
    </div>
  );
};

export default ExploreContainer;
