
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
            Favorite Fruit <IonText color="danger">(Required)</IonText>
          </div>
          <IonSelectOption value="apple">Apple</IonSelectOption>
          <IonSelectOption value="banana">Banana</IonSelectOption>
          <IonSelectOption value="orange">Orange</IonSelectOption>
          <IonSelectOption value="orange">Manggo</IonSelectOption>
          <IonSelectOption value="orange">Pineapple</IonSelectOption>
        </IonSelect>
      </IonItem>
    </IonList>
              </IonContent>
              </IonPage>
      );

};
export default Favorites;