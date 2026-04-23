
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonItem, IonSelect, IonText, IonSelectOption } from '@ionic/react';

const Favorites: React.FC = () =>{
      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Favorites</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
              <IonContent className="ion-padding">
                <IonList>
      <IonItem>
        <IonSelect placeholder="Select a Fruit">
          <div slot="label">
            Favorite Food <IonText color="danger">(Required)</IonText>
          </div>
          <IonSelectOption value="adobo">adobo</IonSelectOption>
          <IonSelectOption value="Friedchicken">Friedchicken</IonSelectOption>
          <IonSelectOption value="humba">humba</IonSelectOption>
          <IonSelectOption value="babae">babae</IonSelectOption>
          <IonSelectOption value="inihaw">inihaw</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
              </IonContent>
              </IonPage>
      );

};
export default Favorites;