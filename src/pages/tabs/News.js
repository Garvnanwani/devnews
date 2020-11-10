import { IonContent, IonPage } from '@ionic/react'
import React from 'react'
import LargeHeader from '../../components/Header/LargeHeader'
import SmallHeader from '../../components/Header/SmallHeader'

const News = () => {
    return (
        <IonPage>
            <SmallHeader title="DevNews" />
            <IonContent fullscreen>
                <LargeHeader title="DevNews" />
            </IonContent>
        </IonPage>
    )
}

export default News
