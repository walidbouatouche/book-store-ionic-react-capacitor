import React from 'react';
import Header from './header'
import { IonContent, IonPage } from '@ionic/react';

const Menu = ({ children, title }: any) => {

    return (
        <IonPage>
            <Header title={title} ></Header>

            <IonContent>
                {children}
            </IonContent>
        </IonPage>
    );
};

export default Menu;
