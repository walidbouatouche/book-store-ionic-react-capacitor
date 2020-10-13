import {
  IonContent,

  IonMenu,

  IonHeader
} from '@ionic/react';

import React from 'react';
import { menuHead } from '../imgs/menuHead'
import Auth from '../helpers/auth'

const Menu: React.FC = () => {

  const logout = () => {
   Auth.clearAll()

  }
  return (
    <IonMenu contentId="main" style={{ opacity: "0.9" }} type="overlay">
      <IonHeader style={{
        background: `url(${menuHead})`,
        height: "30%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        borderTop: "4px solid #75C46B",
      }}>

        Book-store
        <br />



      </IonHeader>
      <IonContent>

        {Auth.isAuth() && <span onClick={logout}>logout</span>}

      </IonContent>
    </IonMenu>
  );
};

export default Menu;
