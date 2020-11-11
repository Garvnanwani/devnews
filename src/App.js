import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton, IonTabs
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import { createOutline, newspaperOutline, personCircleOutline, searchOutline, trendingUpOutline } from "ionicons/icons";
import React from "react";
import { Redirect, Route } from "react-router-dom";
import News from "./pages/tabs/News";
import Profile from './pages/tabs/Profile';
import Search from './pages/tabs/Search';
import Submit from "./pages/tabs/Submit";
import Trending from "./pages/tabs/Trending";
import { AuthProvider } from './contexts/AuthContext'
/* Theme variables */
import './theme/variables.css';

const App = () => (
  <AuthProvider>
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path="/"
            render={() => <Redirect to="/news" />}
            exact={true}
          />
          <Route path="/news" component={News} />
          <Route path="/trending" component={Trending} />
          <Route path="/submit" component={Submit} />
          <Route path="/search" component={Search} />
          <Route path="/profile" component={Profile} />
          <Route component={() => <Redirect to="/news" />} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="news" href="/news">
            <IonIcon icon={newspaperOutline} />
            <IonLabel>Newsy</IonLabel>
          </IonTabButton>
          <IonTabButton tab="trending" href="/trending">
            <IonIcon icon={trendingUpOutline} />
            <IonLabel>Trending</IonLabel>
          </IonTabButton>
          <IonTabButton tab="submit" href="/submit">
            <IonIcon icon={createOutline} />
            <IonLabel>Submit</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonIcon icon={personCircleOutline} />
            <IonLabel>Profile</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
  </AuthProvider>
)

export default App;
