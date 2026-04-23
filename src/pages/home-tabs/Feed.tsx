
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonList, IonListHeader, IonLabel, IonItem } from '@ionic/react';

const Feed: React.FC = () =>{

   const labels = [
        {name:'Snake IO'},
        {name:'Pokémon Yellow'},
        {name:'Mega Man X'},
        {name:'Pac-Man'},
        {name:'Super Mario World'},
   ]

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                    <IonTitle>Feed</IonTitle>
                  </IonButtons>
                </IonToolbar>
              </IonHeader>
               <IonContent className="ion-padding">
                  {/**/}
           {labels.map((item, index) =>(

             <IonList>
              <IonListHeader>
                 <IonLabel>{item.name}</IonLabel>
              </IonListHeader>
              
            </IonList>
                     
              ))}
     
              </IonContent>
              </IonPage>
      );

};
export default Feed;