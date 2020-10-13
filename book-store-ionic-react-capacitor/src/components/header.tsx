import {

    IonHeader,
    IonMenuButton,
    IonTitle
} from '@ionic/react';

import React from 'react';




const Header = ({ title }: any) => {

    return (
        <IonHeader style={{

            backgroundColor: "#3bb78f",
            backgroundImage: "linear - gradient(315deg, #3bb78f 0 %, #0bab64 74 %)",
            height: "7%"
        }}>
            <IonMenuButton style={{

                float: "left",
                color: "white"

            }} />
            <IonTitle style={{
                marginTop: "10px",
                color: "white",


            }}>{title}</IonTitle>
        </IonHeader >

    );
};

export default Header;
