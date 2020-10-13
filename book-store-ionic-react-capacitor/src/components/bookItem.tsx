import React from 'react';

import {
  IonList,
  IonItem,
  IonLabel,
  IonAvatar
} from '@ionic/react';


import { bookImg } from '../imgs/book'

const BookItem = ({ books }: any) => {

  return (
    <IonList>
      {
        books.map((item: any) =>
          <IonItem key={item._id}>
            < IonAvatar style={{ margin: "10px", border: "1px solid gray" }}>
              <img src={bookImg} />

            </IonAvatar>
            <IonLabel><p>{item.title}</p></IonLabel>
          </IonItem>)
      }
    </IonList>


  );
};

export default BookItem;
