
import { IonSearchbarCustomEvent } from '@ionic/core';
import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonList, IonListHeader, IonLabel, IonSearchbar, SearchbarInputEventDetail } from '@ionic/react';
import { useState } from 'react';

const Search: React.FC = () =>{

   const data = [
    'rana',
    'chubss',
    'cute',
    'Ali',
  ];
  let [results, setResults] = useState([...data]);

  const handleInput = (event: Event) => {
    let query = '';
    const target = event.target as HTMLIonSearchbarElement;
    if (target) query = target.value!.toLowerCase();

    setResults(data.filter((d) => d.toLowerCase().indexOf(query) > -1));
  };

      return(
           <IonPage>
              <IonHeader>
                  <IonToolbar>
                    <IonButtons>
                    <IonMenuButton></IonMenuButton>
                     <IonTitle>Search</IonTitle>
                  </IonButtons>
                </IonToolbar>
              <IonSearchbar color="rana" placeholder="rana" debounce={10} onIonInput={(event) => handleInput(event)}></IonSearchbar>
              </IonHeader>
               <IonContent className="ion-padding">
                {/**/}
                          {results.map((result, index) =>(
               
                            <IonList>
                             <IonListHeader>
                                <IonLabel>{result}</IonLabel>
                             </IonListHeader>
                             
                           </IonList>
                                    
                             ))}
              </IonContent>
              </IonPage>
      );

};
export default Search;